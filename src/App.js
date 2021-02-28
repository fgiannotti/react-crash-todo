import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {v4 as uuid} from 'uuid';

import './App.css';

class App extends Component {
  state= { 
    todos: [
      {
        id:uuid(),
        title:'Take trash',
        completed: false,
      },
      {
        id:uuid(),
        title:'Walk out the dog',
        completed: false,
      }
    ]
  }

  markComplete = (id,title) => {
    this.setState({todos:this.state.todos.map(todo => {
      if(todo.id === id){   
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  deleteTodo = (id) => {
    this.setState({ 
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  addTodo = (title) => {
    const newTodo = {id: uuid(), title:title, completed:false}
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render (){
    return(    
      <Router>
        <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Todos todos={this.state.todos} markComplete = {this.markComplete} deleteTodo={this.deleteTodo}></Todos>
              <AddTodo addTodo={this.addTodo}> </AddTodo>
            </React.Fragment>
          )} />

          <Route path="/about" component={About}/>
        </div>
        </div>
      </Router>

    );
  }
}

export default App;
