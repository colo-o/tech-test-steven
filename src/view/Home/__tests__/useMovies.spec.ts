import { renderHook } from '@testing-library/react-hooks';

import useMovies from 'view/Home/useMovies';

import TestProviders from 'test/TestProviders';
import { generateMovieList } from 'mocks/movies';
import { extractCategoriesFromMovies } from 'core/utils';

describe('[HOOK]: useMovie Hook', () => {
  it('[useMovie] Sucessful hook response', async () => {
    const movieStub = generateMovieList(10, 'staticInfo');
    const categoriesStub = extractCategoriesFromMovies(movieStub);

    const { result, waitFor } = renderHook(useMovies, { wrapper: TestProviders });
    
    expect(result.current.isLoading).toBe(true);
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.movies).toStrictEqual(movieStub);
    expect(result.current.categories).toStrictEqual(categoriesStub);
  })
})
