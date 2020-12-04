import React,{useState,useEffect} from 'react';
import {useHistory} from "react-router-dom"
import axios from "axios";
import "./users.css"
import Modal from 'react-modal';
function Users() {
    const history=useHistory()
    const [genere,setgenere]=useState("drama")
    const [Movies,setMovie]=useState([])
    const [review,setreview]=useState("")
    const [check,setcheck]=useState(true)
    const [viewReview,setviewReview]=useState([])
    const [temp,settemp]=useState(false)
    const handleback=()=>{
        history.push("/")
    }
    const handlereview=(id)=>
    {
        console.log(id)
    console.log(review)
    const value={
        MovieId:id,
        review:review
    }
    axios.post("http://localhost:4000/AddReview",value)
    .then((result)=>
    {console.log(result)
      console.log("review Added")
      
      setreview(" ")
    })
    .catch((err)=>
    {
        console.log(err)
    })
    }
    const showreview=async(id)=>{
        console.log("hi")
        console.log(id)
        
      await  axios.post("http://localhost:4000/ViewReview/?MovieId="+id)
        .then((result)=>
        {console.log(result.data)
            setviewReview(result.data.Data)
            settemp(true)
          
        })
        .catch((err)=>
        {
            console.log(err)
        })

    }
    const handlegenere=()=>
    {
        
        axios.get("http://localhost:4000/ViewMovieGenere/?Genere="+genere)
        .then((result)=>
        {
            console.log(result.data.Data)
          setMovie(result.data.Data)
          setreview("")
          
          
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
    const handleclose=()=>{
        settemp(false)
    }
    useEffect(() => {
        
     axios.get("http://localhost:4000/ViewMovies")
         .then((result)=>
         {
             console.log(result.data.Data)
           setMovie(result.data.Data)
           setreview("")
         })
         .catch((err)=>
         {
             console.log(err)
         })
     },[check])
     
    return (
        <div>
            <div>
            <div className="Logout">
                <button onClick={handleback}>Logout</button>
            </div>
                <div className="Genere">
                <label >Genere</label>
          <select onChange={e=>setgenere(e.target.value)}>
        <option value="drama">Drama</option>
        <option value="romance">Romance</option>
        <option value="action">Action</option>
        <option value="thriller">Thriller</option>
        </select>
        <div>
             <button onClick={handlegenere}>Search</button>
        </div>
        </div>
        
                <div className="moviedetails">
                    {Movies.map((i)=><div>
                        <div><p>MovieName: {i.MovieName}</p></div>
                        <div><p>MovieGenere: {i.MovieGenere}</p></div>
                        <div><p>MovieSynopsis: {i.MovieSynopsis}</p></div>
                        <img src={require("./Images/"+i.MoviePoster)} width="600px" height="200px"></img>
                    <div></div>
                    
                        <div>
                      
                         </div>
                        <div>
                                <input type="text" onChange={e=>setreview(e.target.value)} ></input>
                                <button onClick={()=>handlereview(i.MovieId)}>Write Review</button>
                            </div>
                            <div>
                                <button onClick={()=>showreview(i.MovieId)}>View Review</button>
                                </div>
                               <Modal isOpen={temp} >
                                   
                                <div>
                            {viewReview.map((i)=><p>{i.MovieComments}</p>)}
                            <button onClick={handleclose}>Back</button>
                        </div>
                        </Modal>
                        </div>)}
                        
                        
                        
                        
                </div>
            </div>
           
        </div>
    )
}

export default Users

