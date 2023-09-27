import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Heading } from '../components/ds/Heading';
import { useAllAnimalsCMSQuery } from '../hooks/useAllAnimalsCMSQuery';
import { Grid, GridItem } from '../components/ds/Grid';
import { Text } from '../components/ds/Text';
import { Link } from '../components/ds/Link';
import { Stack } from '../components/ds/Stack';

export default function Home() {
  const animals = useAllAnimalsCMSQuery();

  return (
    <Stack>
      <Heading level={1} align="center">
        Animals
      </Heading>
      <Grid>
        {animals.map((animal) => {
          const image = getImage(
            animal.featuredImage.gatsbyImageData
          ) as IGatsbyImageData;

          return (
            <GridItem key={animal.name}>
              <Link href={`/animal/${animal.slug}`}>
                <Stack spacing="larger">
                  <GatsbyImage image={image} alt={animal.name} />
                  <Text weight="bold" size="large">
                    {animal.name}
                  </Text>
                </Stack>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Stack>
  );
}
