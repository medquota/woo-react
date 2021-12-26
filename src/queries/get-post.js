import { gql } from "@apollo/client";

/**
 * GraphQL categories query.
 */
const GET_POST_QUERY = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        date
        content
        slug
        featuredImage {
          node {
            caption
            altText
            sourceUrl(size: LARGE)
          }
        }
      }
    }
  }
`;

export default GET_POST_QUERY;
