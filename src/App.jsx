import { useState } from 'react'

import { getSynonyms } from './services/openAIService'

import './App.css'

function App() {
  const [ query, setQuery ] = useState('')
  const [ results, setResults ] = useState([])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClick = async () => {
    const { message } = await getSynonyms(query)
    const json = JSON.parse(message.content)
    const synonyms = json.synonyms
    setResults(synonyms)
  }

  const displayResults = () => {
    return results.map((result, idx) => {
      return (
        <h3 key={ idx }>
          { result }
        </h3>
      )
    })
  }
  return (
    <>
    <h2>
      Find Synonyms:
    </h2>
    <input type="text" onChange={handleChange}/>
    <section className="actions">
      <button onClick={handleClick}>
        Search!
      </button>
    </section>
    <section className="results">
      { displayResults() }
    </section>
    </>
  )
}

export default App
