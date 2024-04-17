import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light'
    }
  }
  render() {
    const toggleMode = () => {
      if (this.state.mode === 'light') {
        document.body.style.backgroundColor = 'black';
        this.setState({
          mode: 'dark'
        })
      } else {
        document.body.style.backgroundColor = 'white';
        this.setState({
          mode: 'light'
        })
      }
    }
    return (
      <>
        <Router basename='/NewsGen'>
          <Navbar mode={this.state.mode} toggleMode={toggleMode} />
          <Routes>
            <Route exact path='/' element={<News docTitle='General' mode={this.state.mode} key='general' />} />
            <Route exact path='/business' element={<News docTitle='Business' mode={this.state.mode} key='business' category='business' />} />
            <Route exact path='/entertainment' element={<News docTitle='Entertainment' mode={this.state.mode} key='entertainment' category='entertainment' />} />
            <Route exact path='/health' element={<News docTitle='Health' mode={this.state.mode} key='health' category='health' />} />
            <Route exact path='/science' element={<News docTitle='Science' mode={this.state.mode} key='science' category='science' />} />
            <Route exact path='/sport' element={<News docTitle='Sports' mode={this.state.mode} key='sports' category='sports' />} />
            <Route exact path='/tech' element={<News docTitle='Tech' mode={this.state.mode} key='technology' category='technology' />} />
            <Route exact path='/about' element={<About docTitle='About' mode={this.state.mode} />} />
          </Routes>
        </Router>
      </>
    )
  }
}
