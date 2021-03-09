//export const ActionName=(name)=>{
//	return {
//		type:"CN",
//		payload:name
//	}
//}

export const ActionName=()=>{
	return async (dispatch)=> {
		const data = await fetch('https://jsonplaceholder.typicode.com/users');
		const res2 = await data.json();
		dispatch({type:'CN',payload:res2[2].name});
	}
}

export const actionWish=()=>{
	return async (dispatch)=> {
		dispatch({type:'AW',payload:'code'});
	}
}