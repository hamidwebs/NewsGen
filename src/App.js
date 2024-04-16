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
            <Route exact path='/general' element={<News mode={this.state.mode} key='general' category='general' />} />
          <Routes>
            <Route path='/general' element={<News mode={this.state.mode} key='general' category='general' />} />
            <Route path='/business' element={<News mode={this.state.mode} key='business' category='business' />} />
            <Route path='/entertainment' element={<News mode={this.state.mode} key='entertainment' category='entertainment' />} />
            <Route path='/health' element={<News mode={this.state.mode} key='health' category='health' />} />
            <Route path='/science' element={<News mode={this.state.mode} key='science' category='science' />} />
            <Route path='/sport' element={<News mode={this.state.mode} key='sports' category='sports' />} />
            <Route path='/tech' element={<News mode={this.state.mode} key='technology' category='technology' />} />
            <Route path='/about' element={<About mode={this.state.mode} />} />
          </Routes>
        </Router>
      </>
    )
  }
}
