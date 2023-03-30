import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('display image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((ele) => ele.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
