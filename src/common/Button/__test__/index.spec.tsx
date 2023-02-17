import { render, screen, fireEvent } from '@testing-library/react';

import Button from 'common/Button';

describe('[BUTTON]', () => {
  it('Should trigger onClick action', () => {
    const onClickMock = jest.fn();

    render(<Button onClick={onClickMock}>Hello world</Button>);

    const button = screen.getByRole('button', { name: 'Hello world' });
    fireEvent.click(button);

    expect(onClickMock).toBeCalledTimes(1);
    expect(button).toMatchSnapshot();
  });

  it('Should display a disabled button', () => {
    const onClickMock = jest.fn();

    render(
      <Button onClick={onClickMock} disabled>
        Hello world
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Hello world' });
    fireEvent.click(button);

    expect(onClickMock).toBeCalledTimes(0);
    expect(button).toMatchSnapshot();
  });
});
