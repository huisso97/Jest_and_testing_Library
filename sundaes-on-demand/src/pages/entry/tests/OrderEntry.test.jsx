import { render, screen, waitFor } from '@testing-library/react';
import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

test('handle error for scoops and toppings routes', async () => {
  // override handler
  // reset 핸들러는 핸들러를 인수로 취하고, 서버에 관한 엔드포인트가 있는 모든 핸들러를 재설정한다.
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry />);

  // alert가 비동기식으로 나타날 것 -> Axios에서 catch 함수가 실행될 때까지 경고창이 나타나지 않기 때문
  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert');

    expect(alerts).toHaveLength(2);
  });
});
