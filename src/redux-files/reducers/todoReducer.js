import {ADD_TODO, EDIT_TODO, TOGGLE_TODO, DEL_TODO} from '../actions/actionTypes'

const initialState = {
    todo: '',
    todos : [
      {
        id : 1,
        title : 'first task',
        completed : false
      },
      {
        id : 2,
        title : 'second task',
        completed : false
      },
      {
        id : 3,
        title : 'third task',
        completed : true
      }
    ]
}

export default function(state = initialState, action){
  switch(action.type) {
    case ADD_TODO:
      const newTodo = action.payload
      const updatedTodoList = [ ...state.todos, newTodo ];
        return {
            ...state,
            todos: updatedTodoList
        }
    case TOGGLE_TODO:
        const id = action.payload
        const getTodo = state.todos.map( todo => {
            if( id === todo.id) {
                todo.completed = !todo.completed
            }
            return todo
          })
        return {
            ...state, 
            todos: getTodo
        }
    case EDIT_TODO:
      const editTodoId = action.payload;
      const filteredTodo = state.todos.filter(todo => todo.id !== editTodoId);
      const selectedTodo = state.todos.find(todo => todo.id === editTodoId);
      return {
        todos: filteredTodo,
        todo: selectedTodo
      }
    case DEL_TODO:
      const delTodoId = action.payload;
      const remainingTodos = state.todos.filter(todo => todo.id !== delTodoId);
      return {
        ...state,
        todos: remainingTodos
      }
    default: 
      return state
  }
}
