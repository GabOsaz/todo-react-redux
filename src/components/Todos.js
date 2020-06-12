import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

 class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (
            < TodoItem 
                key={todo.id} 
                todo={todo} 
            />
        ))
    }
}

Todos.propTypes = {
    todos : PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todos
})

export default connect(mapStateToProps, null)(Todos)