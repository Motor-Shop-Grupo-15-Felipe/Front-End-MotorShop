import { userMocked } from './mockUser'


import { IVehicleLeilao } from '../interface/IVehicle'

export const vehiclesList: IVehicleLeilao[] = [
  {
    id: '1',
    time: '01:58:00',
    title: ' Renault Kwid',
    image: 'data:image/jpeg;base64,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',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    user: userMocked,
    year: '2013',
    km: 0,
    price: 'R$ 00.000,00'
  },
  {
    id: '2',
    time: '01:58:00',
    title: 'Camaro',
    image:  'https://www.bavariasportscars.com/wp-content/uploads/2022/04/IMG_2913.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    user: userMocked,
    year: '2013',
    km: 0,
    price: 'R$ 00.000,00'
  },
  {
    id: '3',
    time: '01:58:00',
    title: 'Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJCljLzS9KNw0BIuTak_l-bvDjHLpupnCQg&usqp=CAU',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    user: userMocked,
    year: '2013',
    km: 0,
    price: 'R$ 00.000,00'
  },
  {
    id: '7',
    time: '01:58:00',
    title: 'Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XwIf1O8am66EOm4-ei969F5hltiRumayiA&usqp=CAU',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    user: userMocked,
    year: '2013',
    km: 0,
    price: 'R$ 00.000,00'
  }
]