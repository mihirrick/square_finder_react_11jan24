import { useState, useRef } from "react";
function Square()
{
	const rNum = useRef();
	const [num, setNum] = useState("");
	const [msg, setMsg] = useState("");

	const hNum = (event) => { setNum(event.target.value);}

	const compute = (event) => {
		event.preventDefault();
		if (num == "")
		{
			alert("u shud enter number");
			rNum.current.focus();
			setMsg("");
			return;
		}

		let n = parseFloat(num);
		let r = n * n;
		r = r.toFixed(2);
		setMsg("square = " + r);
	}

	return(
		<>
		<center>
			<h1> Square Finder App </h1>
			<form onSubmit={ compute }>
			<input type="number" step="any" placeholder="enter number"
			onChange={hNum} ref={rNum}/>
			<br/><br/>
			<input type="submit" value="Find Square" /> 
			</form>
			<h2> { msg } </h2>
		</center>
		</>






		);
}

export default Square;