import axios from 'axios'

const app = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const getSynonyms = async (word) => {
  const { data } = await app.post(`/synonyms`, {
    text: word
  })
  return data
}
