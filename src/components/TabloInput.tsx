import { FuLLInput } from "./FullInput";
import React from "react";

type TabloInputProps = {
	nameInput: string
	titleInput: number
	callback: (valueInput: number) => void
	onKeyPress?: () => void
	classInput: string
}

export const TabloInput = React.memo(({nameInput, callback, titleInput, onKeyPress, classInput}: TabloInputProps) => {
	return (<div className="tablo-input">
					<span>{nameInput}</span>
					<FuLLInput
						titleInput={titleInput}
						callback={callback}
						onKeyPress={() => { }}
						classInput={classInput}
					/>
				</div>)
});
