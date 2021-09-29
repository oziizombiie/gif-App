import React from "react";
 import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from "../hooks/useFetchGifs";

//inicio del component
export const GifGrid = ({ category }) => {
  const {loading, data} = useFetchGifs(category);
  return (
    <div key="grid">
        <h3>{category}</h3>
        <div className="flex flex-wrap justify-center">
            {loading && <img src="../../public/assets/img/reload-symbol.svg" class="logo" alt="Loading Logo "/> }
            {data.map( (img, index) => {
                         return( <GifGridItem key={`grid-`+index} {...img} />  );
                     } )}
      </div> 
    </div>
  );
};
