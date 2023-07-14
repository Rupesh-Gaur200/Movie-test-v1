function Moviecard({Poster , Title ,id}){
    return (
        <>
        <div key={id} >
            <img src={Poster}></img>
            <p>{Title}</p>
            
            
            </div>
            </>
    )
}
export default Moviecard;