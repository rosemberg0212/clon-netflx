import {
	BANNER
} from '../../types'

export default (state, action)=>{
	switch(action.type){
		case BANNER:
			return{
				...state,
				banner: action.payload
			}
        
		default:
			return state;
	}
}