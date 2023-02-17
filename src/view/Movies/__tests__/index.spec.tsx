import { screen, render, fireEvent } from '@testing-library/react';
import TestProviders from 'test/TestProviders';

import Movies from 'view/Movies/MoviesLayout';
import MoviesProvider from 'context/MoviesContext';
import SearchMoviesProvider from 'context/SearchMoviesContext';
import { rest, server } from 'mocks/server';
import { movieBuilder } from 'mocks/movies';

describe('[Movies]:', () => {
  const setup = () => {
    return (
      <TestProviders>
        <MoviesProvider>
          <SearchMoviesProvider>
            <Movies />
          </SearchMoviesProvider>
        </MoviesProvider>
      </TestProviders>
    );
  };

  it('Should display a movies page and then search for a result', async () => {
    render(setup());

    server.use(
      rest.get(new RegExp('/movies'), async (_, res, ctx) =>
        res(
          ctx.status(200),
          ctx.json({
            movies: [
              movieBuilder({
                overrides: { category: 'CAT-1', title: 'CAT-1-TITLE-1' },
              }),
              movieBuilder({
                overrides: { category: 'CAT-1', title: 'CAT-1-TITLE-2' },
              }),
              movieBuilder({
                overrides: { category: 'CAT-1', title: 'CAT-1-TITLE-3' },
              }),
              movieBuilder({
                overrides: { category: 'CAT-2', title: 'CAT-2-TITLE-1' },
              }),
              movieBuilder({
                overrides: { category: 'CAT-2', title: 'CAT-2-TITLE-2' },
              }),
            ],
          })
        )
      )
    );

    expect(
      await screen.findByRole('heading', { level: 2, name: 'CAT-1' })
    ).toBeInTheDocument();
    expect(screen.getByText('CAT-1-TITLE-1')).toBeInTheDocument();
    expect(screen.getByText('CAT-1-TITLE-2')).toBeInTheDocument();
    expect(screen.getByText('CAT-1-TITLE-3')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'CAT-2' })
    ).toBeInTheDocument();
    expect(screen.getByText('CAT-2-TITLE-1')).toBeInTheDocument();
    expect(screen.getByText('CAT-2-TITLE-2')).toBeInTheDocument();

    const searchInput = screen.getByLabelText('Search');

    fireEvent.change(searchInput, { target: { value: 'CAT-2' } });

    expect(
      screen.queryByRole('heading', { level: 2, name: 'CAT-1' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { level: 2, name: 'CAT-2' })
    ).not.toBeInTheDocument();
    expect(screen.queryByText('CAT-1-TITLE-1')).not.toBeInTheDocument();
    expect(screen.queryByText('CAT-1-TITLE-1')).not.toBeInTheDocument();

    expect(screen.getByText('CAT-2-TITLE-1')).toBeInTheDocument();
    expect(screen.getByText('CAT-2-TITLE-2')).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'CAT-2-TITLE-1' } });

    expect(screen.queryByText('CAT-2-TITLE-2')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
  });
});
