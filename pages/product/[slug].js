import Layout from "../../src/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import client from "../../src/components/ApolloClient";
import AddToCartButton from "../../src/components/cart/AddToCartButton";
import {
  PRODUCT_BY_SLUG_QUERY,
  PRODUCT_SLUGS,
} from "../../src/queries/product-by-slug";
import { isEmpty } from "lodash";
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Price from "../../src/components/single-product/price";

export default function Product(props) {
  const { product } = props;

  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout product={product}>
      {product ? (
        <div className="single-product container mx-auto my-32 xl:px-0 p-2">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="product-images">
              {!isEmpty(product?.galleryImages?.nodes) ? (
                <GalleryCarousel gallery={product?.galleryImages?.nodes} />
              ) : !isEmpty(product.image) ? (
                <img
                  src={product?.image?.sourceUrl}
                  alt="Product Image"
                  width="100%"
                  height="auto"
                  srcSet={product?.image?.srcSet}
                />
              ) : null}
            </div>
            <div className="product-info text-center">
              <h4 className="products-main-title text-2xl uppercase">
                {product.name}
              </h4>
              <Price
                salesPrice={product?.price}
                regularPrice={product?.regularPrice}
              />
              {product?.attributes?.nodes?.map((item, index) => {
                return (
                  <div className="variation p-2 mb-2">
                    <label className="block hidden">{item.label}: </label>
                    <select className="">
                      <option className="">{item.label}</option>;
                      {item.options.map((key) => {
                        return <option className="">{key}</option>;
                      })}
                    </select>
                  </div>
                );
              })}

              <AddToCartButton product={product} />
              <div className="delivery-policy">
                <div className="delivery-policy-title">
                  Delivery &amp; Return Policy
                </div>
                <p>Delivered to:Worldwide</p>
                <ul className="zoo-extend-cart-info">
                  <li className="zoo-extend-cart-info-item delivery-return-block">
                    <Link href="/shipping">
                      <a className="block cl-orange mb-2 lg:inline-block lg:mt-0 underline ">
                        Shipping and Return Policy
                      </a>
                    </Link>
                  </li>
                </ul>
                <p>Returns:Accepted</p>
                <p>Exceptions may apply</p>
              </div>
              <div className="cl-blue">Guarantee Safe Checkout</div>
              <div className="wrap-logo-payments">
                <img
                  src="https://pilore.com/wp-content/uploads/2021/11/Capture-décran-le-2021-11-03-à-17.39.23.png?t=1635957576668"
                  alt="Guarantee safe checkout"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray px-2 text-center mt-10">
            <div className="border-blue-extraDark font-bold mb-5">
              {" "}
              Description
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
              className="product-description mb-5"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const { data } = await client.query({
    query: PRODUCT_BY_SLUG_QUERY,
    variables: { slug },
  });

  return {
    props: {
      product: data?.product || {},
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: PRODUCT_SLUGS,
  });

  const pathsData = [];

  data?.products?.nodes &&
    data?.products?.nodes.map((product) => {
      if (!isEmpty(product?.slug)) {
        pathsData.push({ params: { slug: product?.slug } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
