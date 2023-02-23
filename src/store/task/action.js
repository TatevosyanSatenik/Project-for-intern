import { ADD_TASK, DELETE_TASK } from "./type"


export const addTask = (value) => {
    return {
        type: ADD_TASK, payload: value
    }
}

export const deleteTask = (value) => {
    return {
        type: DELETE_TASK, payload: value
    }
}