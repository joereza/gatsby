import * as path from 'path';

async function turnBreedsIntoPages({ graphql, actions }) {
  const breedTemplate = path.resolve('./src/templates/Breed.tsx');
  const { data: breedData } = await graphql(`
    query {
      allContentfulBreed {
        nodes {
          slug
        }
      }
    }
  `);

  breedData?.allContentfulBreed.nodes.forEach((breed) => {
    actions.createPage({
      path: `animal/breed/${breed.slug}`,
      component: breedTemplate,
      context: {
        slug: breed.slug,
      },
    });
  });
}

async function turnAnimalsIntoPages({ graphql, actions }) {
  const animalTemplate = path.resolve('./src/templates/Animal.tsx');
  const { data: animalData } = await graphql(`
    query {
      allContentfulAnimal {
        nodes {
          slug
        }
      }
    }
  `);

  animalData?.allContentfulAnimal.nodes.forEach((animal) => {
    actions.createPage({
      path: `animal/${animal.slug}`,
      component: animalTemplate,
      context: {
        slug: animal.slug,
        animalSlug: animalData,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([
    turnBreedsIntoPages(params),
    turnAnimalsIntoPages(params),
  ]);
}
