import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
// eslint-disable-next-line import/no-extraneous-dependencies
import Rating from 'react-rating';
import styled from 'styled-components';
import { Text } from '../components/ds/Text';
import { CMSRichText } from '../components/cms/CMSRichText';
import { Heading } from '../components/ds/Heading';
import { Stack } from '../components/ds/Stack';

const QualityBox = styled.div`
  padding: 2rem;
  background-color: var(--brown-100);
`;

export default function SingleBreedPage({ data }: { data: ContentfulBreed }) {
  const image = getImage(
    data.contentfulBreed.featuredImage.gatsbyImageData
  ) as IGatsbyImageData;
  const { lifeExpectancy, listOfQualities } = data.contentfulBreed;

  return (
    <Stack>
      <Heading level={1} align="center">
        {data.contentfulBreed.name}
      </Heading>
      <Text weight="bold" size="large" align="center">
        Origin: {data.contentfulBreed.origin}
      </Text>
      {image && (
        <GatsbyImage
          image={image}
          alt={data.contentfulBreed.featuredImage?.title || ''}
        />
      )}
      <CMSRichText size="large" data={data.contentfulBreed.description} />
      <QualityBox>
        <Stack spacing="small">
          <Heading level={3}>Breed Snapshot</Heading>
          <Text weight="bold" size="large">
            Life Expectancy: {lifeExpectancy[0]}-{lifeExpectancy[1]} years
          </Text>
          {listOfQualities.map((quality, index) => (
            <Stack
              key={index}
              direction={{ mobile: 'vertical', desktop: 'horizontal' }}
            >
              <Text weight="bold" size="large">
                {quality.title}
              </Text>
              <div>
                {/* @ts-expect-error `react-rating` types are currently incompatible with React 18. */}
                <Rating initialRating={quality.scale} readonly />
              </div>
            </Stack>
          ))}
        </Stack>
      </QualityBox>
    </Stack>
  );
}

export const query = graphql`
  query ($slug: String!) {
    contentfulBreed(slug: { eq: $slug }) {
      name
      origin
      slug
      description {
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
      lifeExpectancy
      listOfQualities {
        scale
        title
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

interface Qualities {
  scale: string;
  title: string;
}

interface Description {
  raw: string;
}

interface ContentfulBreed {
  contentfulBreed: {
    name: string;
    featuredImage: FeaturedImage;
    lifeExpectancy: string[];
    listOfQualities: Qualities[];
    origin: string;
    slug: string;
    description: Description;
  };
}
