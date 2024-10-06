import { api } from '@/lib/axios'

interface GetOrderDetailsParams {
  orderId: string
}

export async function cancelOrder({ orderId }: GetOrderDetailsParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
