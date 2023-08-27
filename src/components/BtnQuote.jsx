import React, { useState } from 'react'
import getRandomElemArray from '../utils/getRandomElemArray'

const BtnQuote = ({ setQuote, phrases, setNumberBg, setIsAnimating }) => {
  
  const handleRandomPhrase = () => {
    setIsAnimating(true);

    setQuote(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1,2,3,4]))

    setTimeout(() => {
      setIsAnimating(false);
    }, 400)
  }

  return (
    <button className={'container_btn'} onClick={ handleRandomPhrase }>Ver otro</button>
  )
}

export default BtnQuote