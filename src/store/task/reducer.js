import { task } from "./state";
import { ADD_TASK, DELETE_TASK } from "./type";


export const taskReducer = (state = task, action) => {
    switch (action.type) {
        case ADD_TASK:

            state.arr.push({ id: Date.now(), ...action.payload });
            break;
        case DELETE_TASK:
            state.arr = state.arr.filter(e => e.id !== +action.payload)
            break;
        default:
            break;
    }
    return { ...state }

}