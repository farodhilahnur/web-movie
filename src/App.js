import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Movies from './pages/Movies';
import Search from './pages/Search';

import SinglePage from "./components/SingleContentPage/SinglePage";
import '../src/App.css'
function App() {


  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies" element={<Search />} />
            <Route path="/movie/:id" element={<SinglePage />} />
          </Routes >
        </Router >
      </div >
    </>
  )
}

export default App;
