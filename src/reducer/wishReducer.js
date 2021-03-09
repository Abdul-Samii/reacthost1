

const wishReducer = (state=[],action)=> {

	if(action.type === 'AW')
	{
		return [...state,action.payload]
	}

	return state
}

export default wishReducer;