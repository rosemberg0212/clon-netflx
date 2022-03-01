import React, {useReducer} from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import axios from 'axios';

// import {
	
// } from '../../types';

const MoviehState = props =>{
	const initialState = {
		movie: null
	}

	const [state, dispatch] = useReducer(MovieReducer, initialState);

	const getMovie = async ()=>{
		// const res = await axios.get('https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>')
	}

	return(
		<MovieContext.Provider
			value={{
				movie: state.movie
			}}
		>{props.children}
			
		</MovieContext.Provider>
	);
}

export default MoviehState;