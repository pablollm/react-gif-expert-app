import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch'])

  return (
   <>
      <h2>GifExpertApp</h2>
      <hr/>
        <AddCategory  setCategories={setCategories} categories={categories}/>
         {categories.map( category => (
             <GiftGrid category={category} key={category} />

         ))
        } 

   </>
  )
}

export default GifExpertApp
