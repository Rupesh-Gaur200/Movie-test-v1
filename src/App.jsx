import { useState } from 'react'
import './App.css'
import MovieSForm from './MovieSForm'
import Movielist from './Movielist'
import {RouterProvider, createRoutesFromElements , createBrowserRouter, Route} from "react-router-dom"
function App() {
 const [movie , SetMovie]=useState([]);

 function AddMovie(moviearr){
  SetMovie(moviearr);
  console.log(moviearr);

 }
   
  return (
    <>
    <MovieSForm
     AddMovie={AddMovie}
    ></MovieSForm>

    <Movielist
    
    movie={movie}
    
    ></Movielist>
    </>
  )
}

export default App
