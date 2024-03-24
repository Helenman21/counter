type StateType = {
    countStartValueInput: number,
    countMaxValueInput: number,
    currentCount: number,
    adjustmentMaxAndStartValue: boolean
}
const initialState:StateType = {
    countStartValueInput: 0,
    countMaxValueInput: 0,
    currentCount: 0,
    adjustmentMaxAndStartValue: false
}

export const IncrementAC = () => {
    return { type: 'INCREMENT'} as const
}
export const CountStartValueAC = (countStart: number) => {
    return { type: 'START_VALUE',
             countStart: countStart   } as const
}
export const CountMaxValueAC = (countMax: number) => {
    return { type: 'MAX_VALUE',
        countMax: countMax   } as const
}
export const CurrentCountAC = (currentCount: number) => {
    return { type: 'CURRENT_COUNT_VALUE',
        currentCount: currentCount   } as const
}
export const ErrorAC = (error: boolean) => {
	return { type: 'ERROR',
	error: error } as const
}
export const AdjustmentMaxAndStartValueAC = (ajusment: boolean) => {
	return {
		type: "ADJUSMENT",
		ajusment: ajusment
	}as const
}
type IncrementACType = ReturnType<typeof  IncrementAC>
// type DecrementACType = ReturnType<typeof  DecrementAC>
type CountStartACType = ReturnType<typeof  CountStartValueAC>
type CountMaxACType = ReturnType<typeof  CountMaxValueAC>
type CurrentCountACType = ReturnType<typeof  CurrentCountAC>
type AdjustmentMaxAndStartValueType = ReturnType<typeof AdjustmentMaxAndStartValueAC>
type ActionsType = IncrementACType | CountStartACType | CountMaxACType | CurrentCountACType | AdjustmentMaxAndStartValueType
export const reduser = (state= initialState, action: ActionsType ):StateType => {
    switch (action.type) {
        case "INCREMENT":{
            return {...state, currentCount: state.currentCount + 1}
        }
        case "START_VALUE":{
            return {...state, countStartValueInput: action.countStart}
        }
        case "MAX_VALUE":{
            return {...state, countMaxValueInput: action.countMax}
        }
        case "CURRENT_COUNT_VALUE":{
            return {...state, currentCount: action.currentCount}
        }
		  case "ADJUSMENT": {
			return {...state, adjustmentMaxAndStartValue: action.ajusment}
		  }
        default:
            return state;

    }

}