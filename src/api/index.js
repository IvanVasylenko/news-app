import axios from 'axios'
import { appStore } from '../store'

const BASE_URL = 'https://newsapi.org/v2'

const getApiKey = () => {
  return appStore.getState().user.data.APIKey
}

export const getTopNews = async searchQuery => {
  try {
    const API_KEY = getApiKey()

    const request = {
      method: 'get',
      url: BASE_URL.concat('/top-headlines'),
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY,
      },
      params: {
        country: 'us',
        q: searchQuery,
      },
    }

    const response = await axios(request)

    return response
  } catch (error) {
    return error.response
  }
}
