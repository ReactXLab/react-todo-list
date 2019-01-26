import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uuid from 'uuid';
import axios from 'axios';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/Pages/About'
import './App.css';

class App extends Component {
  /* hot-code state **/
  // state = {
  //   todos: [
  //     {
  //       id: uuid.v4(),
  //       title: 'Take out the trash',
  //       completed: true
  //     },
  //     {
  //       id: uuid.v4(),
  //       title: 'Clean my house',
  //       completed: false
  //     },
  //     {
  //       id: uuid.v4(),
  //       title: 'Meeting with boss',
  //       completed: false
  //     }
  //   ]
  // }

  /* axios jsonplaceholder **/
  state = {
    todos: []
  }

  // initial request
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then(res => {
        this.setState({ todos: res.data });
      })
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  // delete Item
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  // Add Todo
  addTodo = (title) => {
    /** hot-code state */
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] });
    
    /** axios POST */
    axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
      completed: false
    }).then(res=>{
      this.setState({ todos: [...this.state.todos, res.data] });
      console.log(this.state.todos);
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
