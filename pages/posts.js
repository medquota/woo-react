import Layout from "../src/components/Layout";
import client from "../src/components/ApolloClient";
import GET_POST_QUERY from "../src/queries/get-post";
import Post from "../src/components/Post";

export default function Posts(props) {
  const { posts } = props;
  console.log(posts);

  return (
    <Layout>
      <div className="posts posts-container container mx-auto my-32 px-4 xl:px-0">
        <h1 className="text-2xl mb-5 uppercase">Blogs</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {posts.length
            ? posts.map((post) => <Post key={post.id} post={post} />)
            : ""}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_POST_QUERY,
  });

  return {
    props: {
      posts: data?.posts?.nodes || [],
    },
    revalidate: 1,
  };
}
