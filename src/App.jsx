import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandomElemArray'

function App() {

  const phrasesRandom = getRandomElemArray(phrases);
  const numberRandom = getRandomElemArray([1,2,3,4])

  const [quote, setQuote] = useState(phrasesRandom)
  const [numberBg, setNumberBg] = useState(numberRandom)

  const [isAnimating, setIsAnimating] = useState(false);

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`
  }

  return (
    <div className='container' style={ bgStyle }>
      <h1 className='container_title'>Galleta de la fortuna</h1>
      <Quote 
        phrase={quote}
        isAnimating={isAnimating}
        /> 
      <BtnQuote 
        setQuote={setQuote}
        phrases={phrases}
        setNumberBg={setNumberBg}
        setIsAnimating={setIsAnimating}
        />
    </div>
  )
}

export default App
