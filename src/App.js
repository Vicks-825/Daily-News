import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
const API = "7a348b16396e4b638576026b442dca36";
const [progress, setProgress] = useState(0);

  return (
    
    <>
    <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<NewsComp setProgress={setProgress} API={API} key="general" category="general" />}></Route>
        <Route exact path="/business" element={<NewsComp setProgress={setProgress} API={API} key="business" category="business" headline="Business News" />}></Route>
        <Route exact path="/entertainment" element={<NewsComp setProgress={setProgress} API={API} key="entertainment" category="entertainment" headline="Entertainment News" />}></Route>
        <Route exact path="/general" element={<NewsComp setProgress={setProgress} API={API} key="general" category="general" headline="General News" />}></Route>
        <Route exact path="/health" element={<NewsComp setProgress={setProgress} API={API} key="health" category="health" headline="Health News" />}></Route>
        <Route exact path="/science" element={<NewsComp setProgress={setProgress} API={API} key="science" category="science" headline="Science News" />}></Route>
        <Route exact path="/sports" element={<NewsComp setProgress={setProgress} API={API} key="sports" category="sports" headline="Sports News" />}></Route>
        <Route exact path="/technology" element={<NewsComp setProgress={setProgress} API={API} key="technology" category="technology" headline="Technology News" />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App;
