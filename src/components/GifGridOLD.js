/***
 * al ocupar solo useState forzamos a que se renderice el componente y se vuelva
 * a ejecutar todo el codigo interno por cada llamada 
 * ej: componente Counter
 * Con useEffect limitamos la ejecucion de codigo de manera condicional
 */


import React, { useState, useEffect }  from 'react'
import { GifGridItem } from './GifGridItem';
// este helper en especifico nos devuelve una promesa
import {getGifs} from '../helpers/GetGifs';

//inicio del component
export const GifGridOLD = ({ category }) => {
    //al usar setCount se vuelve a ejecutar todo el codigó 
    // no solo el setCount
    //para evitar esto usamos el useEffect
    // const [count, setCount] = useState(0);
    const [images, setImages] = useState([]);
    // recibe una funcion que quiero ejecutar
    // y una lista (arreglo) de dependencias, si se manda vacio el use effect solo se usara una vez  (las funciones que trae adentro)
    // si se manda un parametro dentro del use effect debe ser diferente para que se vuelva a pintar el contenido 
    // y surta efecto el cambio
    useEffect( () => {
        getGifs( category)
        .then( gifs => setImages(gifs) )
        .catch( (err) => console.log(err) );
    }, [category]);

    return (
        <div key="grid">
            <h3>{category}</h3>
             <div className="flex flex-wrap justify-center">
                {
                 images &&
                    images.map( (img, index) => {
                        console.log(img);
                        return(
                                {
                                    /* 
                                        Modo clasico
                                        <GifGridItem 
                                            img={img}
                                        /> 
                                    */
                                },
                                //asi mandamos todos los atributos de manera independiente
                                <GifGridItem key={`grid-`+index} {...img} />
                        );
                    } )
                }
             </div>
        </div>
    )
}

export const Counter = () =>{
    const [counter, setCounter] = useState(0);

    function useBtn(){
        setCounter(counter+1);
        console.log(counter);
        return;
    }

    return(
        <button onClick={useBtn}>
            tocame
        </button>
    )
}