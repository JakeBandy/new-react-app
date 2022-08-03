
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      todos: [{id: 1, todo:"walk fish"},
              {id: 2, todo: "water roof"}, 
              {id: 3, todo:'feed dragon'},
            ],
          },
      text = '';
    }

  }

  // handleClick = () => {
  //   this.setState({isClicked: !this.state.isClicked})
  // }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: ''
    })
  }

  handleDelete = (index) => {
    console.log(index)
    let copyOfList = this.state.todos
    copyOfList.splice(index, 1)
    this.setState({todos: [...copyOfList]})
  }

  componentDidUpdate = () => {
    console.log(this.state.todos)
  }



  render = () => {
    return (
      <div className="app">
      <h2>Todos</h2>
      <input type="text" onChange={this.handleChange} value={this.state.text}/>
      { <button onClick={this.handleClick}>{this.isClicked ? 'Toggle' : 'Untoggle'}</button> }
      <button onClick={this.handleSubmit}>Submit</button>
      <ul>
      {
        this.state.todos.map((todo, id) => {
          return <li key={id}>{todo}</li>
        })
      }
      </ul>
      </div>
    );
  };


export default App;
