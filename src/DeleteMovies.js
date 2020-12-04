import React,{useState,useEffect} from 'react'
import Axios from "axios"
import { useHistory} from "react-router-dom"
import "./DeleteMovie.css"
function DeleteMovies() {
    const [Movies,setMovie]=useState([])
    const [check,setcheck]=useState(true)
    const history=useHistory()
    const handleback=()=>{
        history.push("/Admin")
    }
    const [Name,setname]=useState("")
    useEffect(() => {
        
        Axios.get("http://localhost:4000/ViewMovies")
            .then((result)=>
            {
                console.log(result.data.Data)
              setMovie(result.data.Data)
            })
            .catch((err)=>
            {
                console.log(err)
            })
        },[check])
    
    const handleDelete=async()=>
    {
        const formData = new FormData();
        console.log(Name)
        formData.append("MovieName",Name)
        
        await Axios.delete("http://localhost:4000/DeleteMovieDetails/?MovieName="+Name,formData)
        .then((response)=>
        { if(response.data)
            console.log(response)
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
    return (
        <div >
            <div className="DisplayMovie" >
    {Movies.map((i)=><p>{i.MovieName}</p>)}
            </div>
            <div className="DeleteMoviecss">
            <div>
            <input type="text" onChange={e=>setname(e.target.value)}></input>
            </div>
            <div>
                <button onClick={handleDelete}> 
                    Delete
                </button>
                <button onClick={handleback}> 
                    Back
                </button>
            </div>
            </div>
            
        </div>
    )
}

export default DeleteMovies
