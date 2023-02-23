import axiosApi from './axiosInstanceApi'

const getCoins = async () => {
  try {
    const response = await axiosApi.get<List>(
      '/coins?skip=0&limit=15&currency=USD'
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export const api = {
  getCoins
}
