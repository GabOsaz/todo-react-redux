import {v4 as uuidv4} from 'uuid';
import {ADD_TODO, TOGGLE_TODO, EDIT_TODO, DEL_TODO} from './actionTypes';

export const addTodo = (title) => {
    const newTodo = {
        id : uuidv4(),
        title,
        completed : false
      }
      
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const markComplete = (id) => {
    const clickedId = id
    return {
        type: TOGGLE_TODO,
        payload: clickedId
    }
}

export const editTodo = (id) => {
    const todoId = id
    return {
        type: EDIT_TODO,
        payload: todoId
    }
}

export const delTodo = (id) => {
    const delTodoId = id
    return {
        type: DEL_TODO,
        payload: delTodoId
    }
}