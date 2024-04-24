import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  const [mode, setMode] = useState('light');
  const [progress, setNewProgress] = useState(0);
  const toggleMode = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = 'black';
      setMode('dark');
    } else {
      document.body.style.backgroundColor = 'white';
      setMode('light');
    }
  }
  const setProgress = (progress) => {
    setNewProgress(progress);
  }
  let apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <>
      <Router basename='/NewsGen'>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(progress)}
          className='mt-5'
          height={4}
        />
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} setProgress={setProgress} docTitle='General' mode={mode} key='general' />} />
          <Route exact path='/business' element={<News apiKey={apiKey} setProgress={setProgress} docTitle='Business' mode={mode} key='business' category='business' />} />
          <Route exact path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} docTitle='Entertainment' mode={mode} key='entertainment' category='entertainment' />} />
          <Route exact path='/health' element={<News apiKey={apiKey} setProgress={setProgress} docTitle='Health' mode={mode} key='health' category='health' />} />
          <Route exact path='/science' element={<News apiKey={apiKey} setProgress={setProgress} docTitle='Science' mode={mode} key='science' category='science' />} />
          <Route exact path='/sport' element={<News apiKey={apiKey} setProgress={setProgress} docTitle='Sports' mode={mode} key='sports' category='sports' />} />
          <Route exact path='/tech' element={<News apiKey={apiKey} setProgress={setProgress} docTitle='Tech' mode={mode} key='technology' category='technology' />} />
          <Route exact path='/tech' element={<News apiKey={apiKey} setProgress={setProgress} docTitle='World' mode={mode} key='world' category='world' />} />
          <Route exact path='/tech' element={<News apiKey={apiKey} setProgress={setProgress} docTitle='Nation' mode={mode} key='nation' category='nation' />} />
          <Route exact path='/about' element={<About docTitle='About' mode={mode} />} />
        </Routes>
      </Router>
    </>
  )
}