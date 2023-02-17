import {
  filterMoviesResultsByTitle,
  sortMoviesByCategory,
  groupMoviesByCategory,
} from 'core/utils';

import { movieBuilder } from 'mocks/movies';

describe('[UTILS]:', () => {
  it('[filterMoviesResultByTitle]: Return an array of filtered movies', () => {
    const movieList = [
      [
        movieBuilder({ overrides: { title: 'Some Random Movie' } }),
        movieBuilder({ overrides: { title: 'Some Random Movie 2' } }),
        movieBuilder({ overrides: { title: 'A complete movie 2' } }),
      ],
    ];

    const filteredMovies = filterMoviesResultsByTitle(
      movieList,
      'Some Random Movie'
    );

    expect(filteredMovies.length).toBe(2);
  });

  it('[filterMoviesResultByTitle]: Return an empty array when there is no match on search', () => {
    const movieList = [
      [
        movieBuilder({ overrides: { title: 'Some Random Movie' } }),
        movieBuilder({ overrides: { title: 'Some Random Movie 2' } }),
        movieBuilder({ overrides: { title: 'A complete movie 2' } }),
      ],
    ];

    const filteredMovies = filterMoviesResultsByTitle(
      movieList,
      'NO MATCH ON SEARCH'
    );

    expect(filteredMovies.length).toBe(0);
  });

  it('[sortMoviesByCategory]: Returns a sorted movies list', () => {
    const movieList = [
      movieBuilder({ overrides: { category: 'ZPC' } }),
      movieBuilder({ overrides: { category: 'ABC' } }),
      movieBuilder({ overrides: { category: 'SOME' } }),
      movieBuilder({ overrides: { category: 'DID' } }),
    ];

    const sortedMovies = sortMoviesByCategory(movieList);

    expect(sortedMovies.map(m => m.category)).toStrictEqual([
      'ABC',
      'DID',
      'SOME',
      'ZPC',
    ]);
  });

  it('[sortMoviesByCategory]: Returns an empty list on empty inputs', () => {
    const sortedMovies = sortMoviesByCategory(undefined);

    expect(sortedMovies).toStrictEqual([]);
  });

  it('[groupMoviesByCategory]: Maps keys ', () => {
    const firstObject = movieBuilder({ overrides: { category: 'ABC' } });
    const secondObject = movieBuilder({ overrides: { category: 'SOME' } });
    const thirdObject = movieBuilder({ overrides: { category: 'ABC' } });

    const moviesInput = [firstObject, secondObject, thirdObject];

    const expectedGroup = {
      ABC: [thirdObject, firstObject],
      SOME: [secondObject],
    };

    const groupedMovies = groupMoviesByCategory(moviesInput);

    expect(groupedMovies).toStrictEqual(expectedGroup);
  });
});
