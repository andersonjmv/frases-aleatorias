import React from 'react'

const Quotes = ({quote}) => {
  return (
    <div className="quote">
      <span className="left">❝</span>
      <blockquote>
        {quote.text}
      </blockquote>
      <small className="small">{quote.author}</small>
      <span className="right">❞</span>
    </div>
  )
}

export default Quotes
