import React from 'react'
import { useEffect ,useState} from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../services/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GiftGrid = ({category}) => {
const {data:gifs,loading} = useFetchGifs(category);
    
   
  return (
    <>
    <h3>{category}</h3>
    {loading && <p>Loading...</p>}
     <div className='card-grid'>
      {
        gifs.map(gif => (  <GifGridItem key={gif.id} gif={gif}/>))
     }
     </div>

    </>
  )
}

GiftGrid.propTypes = {
category: PropTypes.string.isRequired
}