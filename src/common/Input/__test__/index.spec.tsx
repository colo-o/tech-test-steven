import { render, screen, fireEvent } from '@testing-library/react';

import Input from 'common/Input';
import { useState } from 'react';

const Wrapp = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      onChange={ev => setValue(ev.target.value)}
      value={value}
      name="input"
      type="text"
    />
  );
};

describe('[INPUT]', () => {
  it('Should render a input value when use types something', () => {
    render(<Wrapp />);

    const input: HTMLInputElement = screen.getByLabelText('input');
    fireEvent.change(input, { target: { value: 'Hello world' } });

    expect(input.value).toBe('Hello world');
    expect(input).toMatchSnapshot();
  });
});
