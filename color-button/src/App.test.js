import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color, and updates when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be "Change to Red"
  expect(colorButton).toHaveTextContent('Change to red');
});
