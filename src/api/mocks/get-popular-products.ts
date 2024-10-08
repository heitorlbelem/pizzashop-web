import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { amount: 200, product: 'Pepperoni' },
    { amount: 400, product: 'Calabresa' },
    { amount: 140, product: '4 Queijos' },
    { amount: 90, product: 'Marguerita' },
    { amount: 250, product: 'Bacon' },
  ])
})
