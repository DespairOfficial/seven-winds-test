import axios from 'axios'

const API_URL = 'http://185.244.172.108:8081/v1/outlay-rows/entity/22209/'

const $host = axios.create({ baseURL: API_URL })

export { $host }