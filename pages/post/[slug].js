import Layout from "../../src/components/Layout";
import { useRouter } from "next/router";
import client from "../../src/components/ApolloClient";
import { POST_BY_SLUG_QUERY, POST_SLUGS } from "../../src/queries/post-by-slug";
import { isEmpty } from "lodash";

export default function Post(props) {
  const { post } = props;

  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      {post ? (
        <div className="single-post container mx-auto my-32 px-4 xl:px-0">
          <h1 className="post-main-title text-2xl uppercase">{post.title}</h1>
          <div className="post-images">
            <img
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              width="100%"
              height="auto"
            />
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
            className="post-description mb-5"
          />
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
    query: POST_BY_SLUG_QUERY,
    variables: { slug },
  });
  return {
    props: {
      post: data?.postBy || {},
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: POST_SLUGS,
  });

  const pathsData = [];

  data?.posts?.nodes &&
    data?.posts?.nodes.map((post) => {
      if (!isEmpty(post?.slug)) {
        pathsData.push({ params: { slug: post?.slug } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
