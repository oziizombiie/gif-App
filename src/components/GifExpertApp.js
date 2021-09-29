import { useState } from "react";

import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
import { RemoveCategory } from "./RemoveCategory";
const GifExpertApp = () =>{
    // Al usar const y declarar el array no lo podemos mutar dinamicamente
    const [categories, setCategories] = useState(['dragon ball']);

    // const addCategory  = ( cat ) => {
    //     // esto es una forma de solucion corta
    //     // const newElement = [...own, 'naruto'];
    //     // setcategories(newElement);
    //     //esto es otra forma
    //     setCategories( cats => [...cats, cat] );
    // }

    // const removeCategory = ( cat ) => {
    //     setCategories( cats => [...cats, cat] );
    // }
    return(
        <>
        <h2>GifExpertApp</h2>
        <hr></hr>
        <AddCategory setCategories={setCategories}/>
        <ol className="flex space-x-3 justify-center">
            {categories && 
                categories.map( 
                    (category, index) => 
                        <li className="rounded-full py-1 px-3 bg-red-500 text-sm text-white" key={`category-${index}`}>
                            <p className="flex self-center">{category} <RemoveCategory categoryTitle={category} setCategories={setCategories}/></p>
                        </li>)
            }
         </ol>
         {categories && 
                categories.map( (category, index) => <GifGrid key={`card-${index}`} category={category}></GifGrid> )
            }
         
            
        </>
    )
}

export default GifExpertApp;