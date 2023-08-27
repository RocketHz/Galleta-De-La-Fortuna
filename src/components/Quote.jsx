import React from 'react'

const Quote = ({ phrase, isAnimating }) => {

  console.log(phrase)

  return (
      <p className={`container_phrase ${isAnimating ? 'jello-diagonal' : ''}`}>{ phrase.phrase }</p>
  )
}

export default Quote