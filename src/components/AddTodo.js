import { Button } from '@material-ui/core'
import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title:''})
    }
    updateValue = (e) => { 
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.updateValue}
                />

                    <Button type="submit" value="Submit">
                        submittt
                    </Button>
            </form>
        )
    }
}
