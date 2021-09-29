import { useState } from "react";
import PropTypes from 'prop-types';

export const RemoveCategory = ( {categoryTitle, setCategories} ) => {
    
    const removeCat = () => {
        console.log(categoryTitle)
        setCategories( cats => { return cats.filter( cat => cat !== categoryTitle)});
    }
    return (
            <svg onClick={removeCat} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
    )
}

RemoveCategory.propTypes ={
    setCategories : PropTypes.func.isRequired
}