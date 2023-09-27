import { useStaticQuery, graphql } from 'gatsby';

export default function useAllBreedsCMSQuery(): Breed[] {
  const data: AllBreedsCMSQueryResult = useStaticQuery(graphql`
    query {
      allContentfulBreed(sort: { fields: createdAt, order: DESC }) {
        nodes {
          createdAt(formatString: "MMMM, DD, YYYY")
          name
          origin
          intro {
            raw
          }
          description {
            raw
          }
          listOfQualities {
            scale
            title
          }
          lifeExpectancy
          featuredImage {
            gatsbyImageData(
              formats: AUTO
              layout: FULL_WIDTH
              placeholder: BLURRED
              resizingBehavior: FILL
            )
            description
            title
            url
          }
        }
      }
    }
  `);

  return data.allContentfulBreed.nodes;
}

interface Quality {
  scale: number;
  title: string;
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
  createdAt: string;
  name: string;
  origin: string;
  intro: {
    raw: string;
  };
  description: {
    raw: string;
  };
  listOfQualities: Quality[];
  lifeExpectancy: number[];
  featuredImage: FeaturedImage;
}

interface AllBreedsCMSQueryResult {
  allContentfulBreed: {
    nodes: Breed[];
  };
}
