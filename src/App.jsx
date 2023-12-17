import { useState } from 'react'

import { getSynonyms } from './services/openAIService'

import './App.css'

function App() {
  const [word, setWord] = useState('')
  const [results, setResults] = useState([])

  const handleChange = (e) => {
    setWord(e.target.value)
  }

  const handleClick = async () => {
    const { message } = await getSynonyms(word)
    const json = JSON.parse(message.content)
    const synonyms = json.synonyms
    setResults(synonyms)
  }

  const displayResults = () => {
    return results.map((result, idx) => {
      return (
        <div className='card' key={idx}>
          {result}
        </div>
      )
    })
  }
  return (
    <>
      <h1>AI Synonym Finder</h1>

      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}> Search! </button>

      <section className="results">
        {displayResults()}
      </section>
    </>
  )
}

export default App
