import React, {  FC } from "react"


type FullInputPropsType = {
	callback: (valueInput: number) => void
	titleInput: number
	onKeyPress?: () => void
	classInput: string
	
}

export const FuLLInput: FC<FullInputPropsType> = React.memo(({callback, titleInput, onKeyPress, classInput}) => {

	const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		callback(Number(event.currentTarget.value))
	}
	const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if(event.key === 'Enter' && onKeyPress){
				onKeyPress()
		}
	}
	return(
		<>
			<input onChange={onChangeInputHandler} type={"number"} onKeyDown = {onKeyPressHandler} value={titleInput} className={classInput} />
		</>
	)
})