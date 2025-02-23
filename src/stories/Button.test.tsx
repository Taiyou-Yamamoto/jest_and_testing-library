import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

test('button test', () => {
  render(<Button label='Click' />);
  const buttonElement = screen.getByText(/Click Me/i);
  //   const buttonElement = screen.getByText(/Click Me/i);
  //   console.log(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});
