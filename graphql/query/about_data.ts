import { gql } from '@apollo/client';

const ABOUT_DATA = gql`
  query contents($slug: String!) {
    contents(where: { slug: $slug }) {
      id
      title
      content
      slug
      image {
        url
      }
      image_sp {
        url
      }
      updated_at
    }
    availables(sort: "priority:asc") {
      priority
      logo {
        url
      }
      description
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
  }
`;

export default ABOUT_DATA;
