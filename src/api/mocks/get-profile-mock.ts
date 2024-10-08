import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      phone: '61981818282',
      email: 'john.doe@example.com',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
