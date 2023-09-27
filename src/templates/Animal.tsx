import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Heading } from '../components/ds/Heading';
import { Grid, GridItem } from '../components/ds/Grid';
import { Text } from '../components/ds/Text';
import { Link } from '../components/ds/Link';
import { Stack } from '../components/ds/Stack';
import { CMSRichText } from '../components/cms/CMSRichText';

export default function SingleAnimalPage({ data }: { data: ContentfulAnimal }) {
  const breeds = data.contentfulAnimal?.breeds;

  return (
    <Stack>
      <Heading level={1} align="center">
        {data.contentfulAnimal.title}
      </Heading>
      <Grid>
        {breeds.map((breed) => {
          const image = getImage(
            breed?.featuredImage?.gatsbyImageData
          ) as IGatsbyImageData;

          return (
            <GridItem key={breed.name}>
              <Link href={`/animal/breed/${breed.slug}`}>
                <Stack>
                  <GatsbyImage
                    image={image}
                    alt={breed.featuredImage?.title || ''}
                  />
                  <Text weight="bold" size="large">
                    {breed.name}
                  </Text>
                  <CMSRichText data={breed.intro} />
                </Stack>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Stack>
  );
}

export const query = graphql`
  query ($slug: String!) {
    contentfulAnimal(slug: { eq: $slug }) {
      slug
      name
      title
      breeds {
        name
        slug
        intro {
          raw
        }
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
`;

interface FeaturedImage {
  gatsbyImageData: {
    formats: string;
    layout: string;
    placeholder: string;
    resizingBehavior: string;
  };
  description: string;
  title: string;
  url: string;
}

interface Intro {
  raw: string;
}

interface Breed {
  name: string;
  slug: string;
  intro: Intro;
  featuredImage: FeaturedImage;
}

interface ContentfulAnimal {
  contentfulAnimal: {
    slug: string;
    name: string;
    title: string;
    breeds: Breed[];
  };
}
