import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3030',
})

export const rfidApi = axios.create({
  baseURL: 'http://192.168.100.50:8080',
})
