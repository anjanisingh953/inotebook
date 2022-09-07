import React from 'react'
import './App.css';
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/NoteState';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';


function App() {

  

  return (
    <>
      
   <NoteState>
      <Routers>
        <Navbar />
        <div className="container">

        <Routes>      
            <Route  path='/' element={<Home />} ></Route>
            <Route exact path='/about' element={<About />} ></Route>
            <Route exact path='/contact' element={<Contact /> } ></Route>
         </Routes>
         </div>
      </Routers>
   </NoteState>
   
     </>
  );
}

export default App;