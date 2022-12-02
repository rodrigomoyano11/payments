import axios from 'axios'

const config = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
}

const api = axios.create(config)

export { api }
