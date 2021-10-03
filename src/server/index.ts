import axios from 'axios'

const apiConfig = {
  'baseURL': 'https://test-api.mojob.io/public'
}

export const JobsApi = axios.create(apiConfig)