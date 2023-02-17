import { screen, render, fireEvent } from '@testing-library/react';
import VotesResume from 'view/VotesResume';
import { MoviesContext } from 'context/MoviesContext';
import { movieBuilder } from 'mocks/movies';

describe('[VOTES RESUME]:', () => {
  const setup = () => {
    const resetSelectedMock = jest.fn();

    const selectedMovies = {
      ABC: movieBuilder({ overrides: { category: 'ABC', title: 'A' } }),
      ABDC: movieBuilder({ overrides: { category: 'ABDC', title: 'B' } }),
      ABCDD: movieBuilder({ overrides: { category: 'ABCDD', title: 'C' } }),
    };

    return (
      <MoviesContext.Provider
        value={{
          isLoading: false,
          selectedMovies: selectedMovies,
          resetSelectedMovies: resetSelectedMock,
          selectMovie: jest.fn(),
          isMovieSelected: jest.fn(),
        }}
      >
        <VotesResume />
      </MoviesContext.Provider>
    );
  };

  it('Should display a votes summary modal when there is movies selected', async () => {
    render(setup());

    const submitButton = screen.getByRole('button', { name: /Submit votes/ });

    expect(submitButton).not.toBeDisabled();
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(await screen.findByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText('A - ABC')).toBeInTheDocument();
    expect(screen.getByText('B - ABDC')).toBeInTheDocument();
    expect(screen.getByText('C - ABCDD')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
