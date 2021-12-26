import Link from "next/link";
import Image from "../image";
import { DEFAULT_PRODUCT_HOME_IMG_URL } from "../constants/urls";

const Post = (props) => {
  const { post } = props;

  return (
    // @TODO Need to handle Group products differently.
    undefined !== post && "GroupProduct" !== post.__typename ? (
      <div className="post mb-5">
        <Link href={`/post/${post?.slug}`}>
          <a>
            <Image
              className="object-cover bg-gray-100"
              width="308"
              height="308"
              loading="lazy"
              sourceUrl={post?.featuredImage?.node?.sourceUrl ?? ""}
              defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
              altText={post?.image?.altText ?? post?.slug}
            />
          </a>
        </Link>
        <div className="post-info">
          <h2 className="post-title mt-3 font-medium text-gray-800">
            {post.title ? post.title : ""}
          </h2>
        </div>
      </div>
    ) : (
      ""
    )
  );
};

export default Post;
