

import styles from "./Form.module.css";

import React from "react"
import {useState} from "react"

function MovieSForm({AddMovie}){

const [movieName ,setMovieName]=useState("");
const url= `https://www.omdbapi.com/?s=${movieName}&apikey=cf019591`
 
  async function MovieSearch(){
    const response=await fetch(url)
    const data= await response.json()
    setMovieName(data)
    AddMovie(data.Search)
    
  }


 function HandleSubmit(e){
    e.preventDefault();
    MovieSearch();
 }
    return(
    <div className={styles.Formmain}>

      
        <form onSubmit={HandleSubmit}>
     <input type="text" value-={movieName} onChange={(e)=>{setMovieName(e.target.value)}}
     ></input>
     
     <button type="Submit">Search</button>
    </form>
    </div>
    )
}
export default MovieSForm;