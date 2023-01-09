import './App.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import React from 'react';

import AddFilm from './components/AddFilm';
import NavBar from './components/NavBar';
import Register from "./components/Register"
import Comedy from "./components/Comedy"
import Drama from "./components/Drama"
import Horror from "./components/Horror"
import Sci_fi from "./components/Sci_fi"
import Action from "./components/Action"
import Family from "./components/Family"
import Documentary from "./components/Documentary"
import Romcom from "./components/Romcom"
import Silent_Movie from "./components/Silent_Movie"
import Thriller from "./components/Thriller"
import Crime_Noir from "./components/Crime_Noir"
import French_Cinema from "./components/French_Cinema"
import Horror_Comedy from "./components/Horror_Comedy"
import Kung_fu from "./components/Kung_fu"
import Bollywood from "./components/Bollywood"
import Anime from "./components/Anime"
import ViewFilm from "./components/ViewFilm"
import EditFilm from "./components/EditFilm"
import Login from './components/Login'
import AllFilms from './components/AllFilms'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/films/comedy" element={<Comedy />} />
        <Route path="/" element={<AllFilms />} />
        <Route path="/films/Drama" element={<Drama />} />
        <Route path="/films/Horror" element={<Horror />} />
        <Route path="/films/Sci_fi" element={<Sci_fi />} />
        <Route path="/films/Action" element={<Action />} />
        <Route path="/films/Family" element={<Family />} />
        <Route path="/films/Documentary" element={<Documentary />} />
        <Route path="/films/Romcom" element={<Romcom />} />
        <Route path="/films/Silent_Movie" element={<Silent_Movie />} />
        <Route path="/films/Thriller" element={<Thriller />} />
        <Route path="/films/Crime_Noir" element={<Crime_Noir />} />
        <Route path="/films/French_Cinema" element={<French_Cinema />} />
        <Route path="/films/Horror_Comedy" element={<Horror_Comedy />} />
        <Route path="/films/Kung_fu" element={<Kung_fu />} />
        <Route path="/films/Bollywood" element={<Bollywood />} />
        <Route path="/films/anime" element={<Anime />} />
        {/* <Route path="/" element={<Register/>}/> */}
        <Route path="/films" element={<AddFilm/>}/>
        <Route path="/film/:id" element={<ViewFilm/>} />
        <Route path="/update/:id" element={<EditFilm/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
