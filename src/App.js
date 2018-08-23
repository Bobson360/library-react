import React, { Component } from 'react'
import LoginForm from './ui/LoginForm'
import './App.css';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <LoginForm/>
      </div>
    )
  }
}

export default App
