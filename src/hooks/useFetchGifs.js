import { useState,useEffect } from "react";
import { getGifs } from "../services/getGifs";

import React from 'react'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({   
        data: [],
        loading: true
     });
      useEffect(() => {
        getGifs(category)
        .then(
            (gifs) => {
                setState({
                    data: gifs,
                    loading: false
                });
            })
    }, [category])

  return state
}
