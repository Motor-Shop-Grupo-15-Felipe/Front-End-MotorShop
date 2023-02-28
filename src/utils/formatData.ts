import { ICreateUser } from '../interface/IUser'

export const formateDataToRegister = (
  data: ICreateUser,
  accountType: string
) => {
  const {
    passwordConfirm,
    cep,
    city,
    complement,
    number,
    state,
    street,
    ...cleanData
  } = data

  const address = {
    cep,
    city,
    complement,
    number,
    state,
    street
  }

  const formateData = {
    ...cleanData,
    isSeller: accountType === 'Anunciante',
    address
  }

  return formateData
}