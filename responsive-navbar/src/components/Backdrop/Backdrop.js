import React from 'react'
import './Backdrop.css'

const backDrop = (props) => {
	console.log(props.onClickBackdrop)
	return (
	<div onClick = {props.onClickBackdrop} className="backdrop"></div>
)}

export default backDrop