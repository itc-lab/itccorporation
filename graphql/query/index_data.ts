import { gql } from '@apollo/client';

const INDEX_DATA = gql`
  query contents($slug: String!) {
    contents(where: { slug: $slug }) {
      id
      title
      slug
      image {
        url
        width
        height
      }
      image_sp {
        url
        width
        height
      }
      whats_new
      updated_at
    }
    openGraphs(where: { slug: $slug }) {
      slug
      type
      url
      title
      description
      seo_images {
        alt
        image {
          url
          width
          height
        }
      }
    }
    breadcrumbJsonLds {
      position
      name
      item
    }
    twitter {
      handle
      site
      cardtype
    }
  }
`;

export default INDEX_DATA;
