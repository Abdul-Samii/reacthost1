import React, {useState, useEffect} from 'react';

const Test=()=>
{
	const [count,setCount]=useState(0);
	const [name,setName]=useState("");
const Inc=()=>
{

	setCount(prevState=>prevState+1);
}
setInterval(Inc,1000);
useEffect(()=>{
	document.title=`count is ${count}`;
	console.log("inside useEffect");
},[count]);
const handle=(ame)=> {
setName(ame);
console.log(ame);
}
	return (
		<>
		<h1>{count}</h1>
		<button onClick={Inc}>Click</button>
		</>
		)
}


export default Test;