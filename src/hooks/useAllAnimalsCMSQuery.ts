import { useStaticQuery, graphql } from 'gatsby';

export function useAllAnimalsCMSQuery(): Animal[] {
  const data: AllAnimalsCMSQueryResult = useStaticQuery(graphql`
    query {
      allContentfulAnimal {
        nodes {
          createdAt(formatString: "MMMM, DD, YYYY")
          title
          slug
          name
          featuredImage {
            gatsbyImageData(
              formats: AUTO
              layout: FULL_WIDTH
              placeholder: BLURRED
              resizingBehavior: FILL
            )
          }
          breeds {
            name
          }
        }
      }
    }
  `);

  return data.allContentfulAnimal.nodes;
}

interface FeaturedImage {
  file: {
    fileName: string;
    url: string;
    details: {
      image: {
        height: number;
        width: number;
      };
      size: number;
    };
    contentType: string;
  };
  filename: string;
  gatsbyImageData: {
    formats: {
      auto: string;
    };
    layout: string;
    placeholder: string;
    resizingBehavior: string;
  };
  description?: string;
  title: string;
  url: string;
}

interface Breed {
  name: string;
}

interface Animal {
  createdAt: string;
  title: string;
  slug: string;
  name: string;
  featuredImage: FeaturedImage;
  breeds: Breed[];
}

interface AllAnimalsCMSQueryResult {
  allContentfulAnimal: {
    nodes: Animal[];
  };
}
