import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key='general' category='general' />} />
          <Route path='/business' element={<News key='business' category='business' />} />
          <Route path='/entertainment' element={<News key='entertainment' category='entertainment' />} />
          <Route path='/health' element={<News key='health' category='health' />} />
          <Route path='/science' element={<News key='science' category='science' />} />
          <Route path='/sport' element={<News key='sports' category='sports' />} />
          <Route path='/tech' element={<News key='technology' category='technology' />} />
        </Routes>
      </Router>
    )
  }
}