import './App.css';
import { ValuesSettings } from './components/ValuesSettings';
import { CounterIncreas } from './components/CounterIncrease';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {AdjustmentMaxAndStartValueAC, CountMaxValueAC, CountStartValueAC, CurrentCountAC, IncrementAC} from "./reduser/reduser";

function App() {
	const counterState = useSelector<AppRootStateType, number>(state => state.reduserCount.currentCount)
	const countMaxValueInput = useSelector<AppRootStateType, number>(state => state.reduserCount.countMaxValueInput)
	const countStartValueInput = useSelector<AppRootStateType, number>(state => state.reduserCount.countStartValueInput)
	const adjustmentMaxAndStartValue = useSelector<AppRootStateType, boolean>(state => state.reduserCount.adjustmentMaxAndStartValue)
	const dispatch = useDispatch()
	const correctInputValues = (countMaxValueInput > countStartValueInput) && (countMaxValueInput > 0) && (countStartValueInput >= 0)
	const isDisableButtonReset = counterState > countStartValueInput && adjustmentMaxAndStartValue
	const isDisableButtonSet = correctInputValues && !adjustmentMaxAndStartValue 
	const error = countMaxValueInput <= 0 || countMaxValueInput < countStartValueInput || countMaxValueInput===countStartValueInput || countStartValueInput < 0
	const isDisableButtonInc = adjustmentMaxAndStartValue && counterState < countMaxValueInput 

	const increaseСounter = () => {
		dispatch(IncrementAC())
	}
	const resetCounter = () => {
		dispatch(CurrentCountAC(0))
	}
	const changeInputValueCountMax = (value: number) => {	
		dispatch(CountMaxValueAC(value))
		dispatch(AdjustmentMaxAndStartValueAC(false))
	}
	const changeInputValueCountStart = (value: number) => {
		dispatch(CountStartValueAC(value))
		dispatch(AdjustmentMaxAndStartValueAC(false))
	}
	const savedCorrectCountsValue = () => {
		if(correctInputValues){			
			dispatch(CurrentCountAC(countStartValueInput))
			dispatch(AdjustmentMaxAndStartValueAC(true))
		}
	}
   const isCountMaxBigger = counterState === countMaxValueInput;
   const classesInputError = 'input-error'
	const classesInputMaxCount = countMaxValueInput < 0 ? classesInputError : ' ';
	const classesInputStartCount = countStartValueInput < 0 ? classesInputError : ' ';

	return (
		<div className = "App">
			<ValuesSettings countMaxValue={countMaxValueInput} 
								 countStartValue={countStartValueInput}
								 changeInputValueCountMax={changeInputValueCountMax}
								 changeInputValueCountStart={changeInputValueCountStart}
								 isDisableButtonSet={isDisableButtonSet}
								 savedCorrectCountsValue={savedCorrectCountsValue}
								 classesInputMaxCount={classesInputMaxCount}
								 classesInputStartCount={classesInputStartCount}
								    />
			<CounterIncreas value={counterState}
								 increaseСounter={increaseСounter} 
								 isDisableButtonInc={isDisableButtonInc}
								 resetCounter={resetCounter}
								 isDisableButtonRes={isDisableButtonReset}
								 isDisableButtonReset={isDisableButtonReset}
								 error={error}
								 adjustmentMaxAndStartValue={adjustmentMaxAndStartValue}
								 isCountMaxBigger={isCountMaxBigger} />
		</div>
	);
}

export default App;
