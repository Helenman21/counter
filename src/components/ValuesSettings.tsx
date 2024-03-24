import React, {FC} from "react";
import { TabloInput } from "./TabloInput";

import { BlockBorderReusable, BlockBorderReusableForButtons, BlockBorderReusableForTablo, StyledBlock } from "./styles"
import { Button } from "./Button";
type TabloProps = {
	countStartValue: number
	countMaxValue: number
	changeInputValueCountMax: (value: number) => void
	changeInputValueCountStart: (value: number) => void	
	isDisableButtonSet: boolean
	savedCorrectCountsValue: () => void
	classesInputStartCount: string
	classesInputMaxCount: string
}

export const ValuesSettings = React.memo(({countStartValue, classesInputStartCount, classesInputMaxCount, countMaxValue, savedCorrectCountsValue, changeInputValueCountMax, changeInputValueCountStart, isDisableButtonSet}: TabloProps) => {
	const classesColorButtonIncDisable = !isDisableButtonSet ? 'button-disabled' : ' ';
	return (
			<StyledBlock >
				<BlockBorderReusable  >
					<BlockBorderReusableForTablo>
							<div  >
								<TabloInput titleInput={countMaxValue}
												callback={changeInputValueCountMax}
												onKeyPress={() => {}}
												classInput={classesInputMaxCount} nameInput="max value"/>
							</div>
							<div >
								<TabloInput titleInput={countStartValue}
												callback={changeInputValueCountStart}
												onKeyPress={() => {}}
												classInput={classesInputStartCount} nameInput="start value"/>
							</div>
									</BlockBorderReusableForTablo>
					<BlockBorderReusableForButtons>
						<Button title="set" callback={savedCorrectCountsValue} isDisable={!isDisableButtonSet} classes={classesColorButtonIncDisable} />
					</BlockBorderReusableForButtons>
				</BlockBorderReusable>
			</StyledBlock>
	)
})