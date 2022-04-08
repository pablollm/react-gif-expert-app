import React from 'react'

export const GifGridItem = ({gif}) => {
  return (
        <div className="card">
            <img src={gif.url} alt={gif.title}/>
            <p className='card-title'>{gif.title}</p>
        </div>
  )
}
