import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import useAllBreedsCMSQuery from '../hooks/useAllBreedsCMSQuery';
import { CMSRichText } from '../components/cms/CMSRichText';
import { Heading } from '../components/ds/Heading';
import { Text } from '../components/ds/Text';
import { Grid, GridItem } from '../components/ds/Grid';

export default function Animals() {
  const breeds = useAllBreedsCMSQuery();

  return (
    <>
      <Heading level={1} align="center">
        Breeds
      </Heading>
      <Grid>
        {breeds.map((breed) => {
          const image = getImage(
            breed?.featuredImage?.gatsbyImageData
          ) as IGatsbyImageData;

          return (
            <GridItem key={breed.name}>
              {image && <GatsbyImage image={image} alt={breed.name} />}
              <Text weight="bold" size="large">
                {breed.name}
              </Text>
              <CMSRichText data={breed.intro} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
