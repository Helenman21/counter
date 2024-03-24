import { log } from "console";
import React, {FC} from "react";

type ButtonPropsType = {
	title: string
	callback: () => void
	classes: string
	isDisable?: boolean
}

export const Button:FC<ButtonPropsType> = ({ title, callback, classes, isDisable }) => {
	const onClickHandler = () => {
		console.log('click buttn')
		callback()
	}
	return(
		<button onClick= { onClickHandler } 
				  className = { classes } 
				  disabled={ isDisable } > { title } 
		</button>
	)
} 
