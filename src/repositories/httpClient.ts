import axios from 'axios'

//axiosのbaseURLやheadersなどを設定して作成されたインスタンスを返す
const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes'
})

export { httpClient }
