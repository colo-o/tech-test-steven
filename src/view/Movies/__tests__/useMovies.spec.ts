import { renderHook } from '@testing-library/react-hooks';

import useMovies from 'view/Movies/useMovies';

import TestProviders from 'test/TestProviders';
import { generateMovieList } from 'mocks/movies';
import { groupMoviesByCategory } from 'core/utils';

describe('[HOOK]: useMovie Hook', () => {
  it('[useMovie] Sucessful hook response', async () => {
    const movieStub = generateMovieList(10, 'staticInfo');
    const groupedStub = groupMoviesByCategory(movieStub);

    const { result, waitFor } = renderHook(useMovies, { wrapper: TestProviders });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.movies).toStrictEqual(groupedStub);
  });
});
