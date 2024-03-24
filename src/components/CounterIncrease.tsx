import React, {FC} from "react";

import { BlockBorderReusable, BlockBorderReusableForButtons, BlockBorderReusableForTablo, StyledBlock } from "./styles"
import { Button } from "./Button";
type CounterIncreasProps = {
	value: number
	increaseСounter: () => void
	isDisableButtonInc: boolean
	resetCounter: () => void
	isDisableButtonReset: boolean
	error: boolean
	isCountMaxBigger: boolean
	adjustmentMaxAndStartValue: boolean
	isDisableButtonRes: boolean
}
export const CounterIncreas = React.memo( ({value, adjustmentMaxAndStartValue, isDisableButtonReset, isCountMaxBigger, increaseСounter, isDisableButtonInc, resetCounter, error} : CounterIncreasProps) => {
	const colorRed = 'fontColorRed';
	const classesDisable = 'button-disabled'
	const classesColorCount = isCountMaxBigger ? colorRed : ' ';
	const classesColorButtonIncDisable = !isDisableButtonInc ? classesDisable : ' ';
	const classesColorButtonResetDisable = !isDisableButtonReset ? classesDisable : ' ';
	const isCount = !error && adjustmentMaxAndStartValue
	return (
			<StyledBlock >
				<BlockBorderReusable>
					<BlockBorderReusableForTablo>
						{isCount && <span className={classesColorCount} >{value}</span>}
						{!adjustmentMaxAndStartValue && !error && <span>enter value and press set</span>}
						{error && <span className={colorRed} >INCORRECT VALUE</span>}
					</BlockBorderReusableForTablo>
					<BlockBorderReusableForButtons>
						<Button title="inc" callback={increaseСounter}  classes={classesColorButtonIncDisable} isDisable={!isDisableButtonInc} />
						<Button title="reset" callback={resetCounter} classes={classesColorButtonResetDisable} isDisable={!isDisableButtonReset} />
					</BlockBorderReusableForButtons>
				</BlockBorderReusable>
			</StyledBlock>
	)
})