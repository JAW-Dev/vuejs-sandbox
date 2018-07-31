import axios from 'axios'
import { newsapiKey } from '@/config/apiKeys'

export function getArticles() {
  return axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsapiKey}`)
}
