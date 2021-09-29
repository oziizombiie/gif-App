import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    const [InputValue, setInputValue] = useState('');
    const searchValue = (e) =>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(InputValue === '' || InputValue === undefined || InputValue === null){
            setInputValue('');
            return;
        }
        setCategories(cats => [InputValue, ...cats] );  
        setInputValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value= {InputValue}
            onChange={searchValue}
            />
        </form>
    )
}

AddCategory.propTypes ={
    setCategories : PropTypes.func.isRequired
}