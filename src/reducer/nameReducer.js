
const nameReducer = (state='',action)=> {

	if(action.type === 'CN')
	{
		
		return action.payload
	}

	return state
}

export default nameReducer;