import { createStore } from "redux";
import root from './rootReducer'


const myStore = createStore(root)
export { myStore }