import Link from "next/link";
import Layout from "../src/components/Layout";
import Product from "../src/components/Product";
import client from "../src/components/ApolloClient";
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";

export default function Home(props) {
  const { products, productCategories, posts } = props || {};
  return (
    <Layout>
      {/*Categories*/}
      <div className="homepage">
        <div className="product-categories-container container mx-auto mt-24 px-4 xl:px-0">
          <div className="my-5">
            <Link href="/categories">
              <img
                width="100%"
                src="https://www.pilore.com/wp-content/uploads/2022/02/2.jpeg"
              />
            </Link>
          </div>
          <h2 className="main-title text-xl mb-5 uppercase">
            <span className="main-title-inner">Super promotion EveryDay!</span>
          </h2>
          <ParentCategoriesBlock productCategories={productCategories} />
        </div>
        {/*Hero Carousel*/}
        <HeroCarousel posts={posts} />
        {/*Products*/}
        <div className="products container mx-auto mt-5 px-4 xl:px-0">
          <h2 className="products-main-title main-title mb-5 text-xl uppercase">
            <span className="main-title-inner">Top Rated Items This Week</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {products.length
              ? products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              : ""}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: PRODUCTS_AND_CATEGORIES_QUERY,
  });

  return {
    props: {
      productCategories: data?.productCategories?.nodes
        ? data.productCategories.nodes
        : [],
      posts: data?.posts?.nodes || [],
      products: data?.products?.nodes ? data.products.nodes : [],
      heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes
        ? data.heroCarousel.nodes[0].children.nodes
        : [],
    },
    revalidate: 1,
  };
}
