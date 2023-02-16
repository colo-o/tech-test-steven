import { build, perBuild } from '@jackfranklin/test-data-bot';
import { faker } from '@faker-js/faker';

import { MovieEntity } from 'api/movie.client.types';

type MovieBuilderMode = 'staticInfo';

const movieBuilder = build<MovieEntity>('Movie', {
  fields: {
    photoUrL: perBuild(() => faker.image.imageUrl()),
    id: perBuild(() => faker.random.words()),
    category: perBuild(() => faker.random.word()),
    title: 'Movie Title',
  },
  traits: {
    staticInfo: {
      overrides: {
        photoUrL: 'image/url',
        id: 'random-id',
        category: 'static-category-name',
        title: 'static-title-name',
      },
    },
  },
});

const generateMovieList = (moviesQuantity: number, mode?: MovieBuilderMode) => {
  return new Array(moviesQuantity)
    .fill(0)
    .map(() => movieBuilder({ traits: mode ? mode : undefined }));
};

export { movieBuilder, generateMovieList };
