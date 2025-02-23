import { render, screen } from '@testing-library/react';
import Login from '../Login';

describe('Test login component', () => {
  test('render form with 1 button', () => {
    render(<Login />);
    const buttonList = screen.findAllByRole('button');

    expect(buttonList).toHaveLength(1);
  });
});
