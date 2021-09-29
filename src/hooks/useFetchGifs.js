
import { useState, useEffect } from 'react';
import {getGifs} from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        setTimeout( () => {
            getGifs(category)
                .then( gifs => setState({
                        data: gifs,
                        loading: false
                    }));
        }, 4000);
    }, [category]);
    

    return state;
}