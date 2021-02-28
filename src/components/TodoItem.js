import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export default class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" style={{marginRight: '8px'}} onChange={this.props.markComplete.bind(this,id,title)}/>
                {title}
                <Button style={{backgroundColor:'red',opacity: '0.8'}} onClick={this.props.deleteTodo.bind(this,id)}> x </Button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
