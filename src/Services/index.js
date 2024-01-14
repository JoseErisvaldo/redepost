import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-redepost.vercel.app'
})

export default api
