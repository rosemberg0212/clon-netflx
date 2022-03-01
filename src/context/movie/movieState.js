import React, {useReducer} from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import axios from 'axios';

import {
	BANNER
} from '../../types';

const MoviehState = props =>{
	const initialState = {
		banner: null
	}

	const [state, dispatch] = useReducer(MovieReducer, initialState);

	const api_key = '6593c17bc96dde9caf9c593636c40304';
	const getMovie = async ()=>{
		const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
		console.log(res.data.results)

		dispatch({
			type: BANNER,
			payload: res.data.results
		})
	}

	return(
		<MovieContext.Provider
			value={{
				banner: state.banner,
				getMovie
			}}
		>{props.children}
			
		</MovieContext.Provider>
	);
}

export default MoviehState;