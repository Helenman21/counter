import { combineReducers,  legacy_createStore as createStore } from 'redux'
import {reduser} from "../reduser/reduser";
const rootReducer = combineReducers({
    reduserCount: reduser
})
// непосредственно создаём store
export const store = createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>