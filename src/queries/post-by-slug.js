import { gql } from "@apollo/client";

export const POST_BY_SLUG_QUERY = gql`
  query GetPosts($slug: String!) {
    postBy(slug: $slug) {
      title
      content
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          caption
          altText
          sourceUrl(size: LARGE)
        }
      }
      date
    }
  }
`;
export const POST_SLUGS = gql`
  query Posts {
    posts(first: 5000) {
      nodes {
        id
        slug
      }
    }
  }
`;
