import app from './config'

export const getSynonyms = async (query) => {
  try {
    const { data } = await app.post(`/synonyms`, {
      text: query
    })
    return data
  } catch (error) {
    console.error(error)
  }
}