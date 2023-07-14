

import Moviecard from "./Moviecard";
function Movielist({movie}){
    return (
        <>
         {movie.map((m)=>{
            return (
                <Moviecard 
                Title={m.Title}
                Poster={m.Poster}
                id ={m.imdbID
                }></Moviecard>
            )
         })}
        
        
        </>
    )
}
export default Movielist

