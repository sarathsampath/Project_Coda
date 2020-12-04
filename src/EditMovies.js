import React,{useState} from 'react'
import { useHistory} from "react-router-dom"
import Axios from "axios"
import "./EditMovies.css"
function EditMovies() {
    const history=useHistory()
    const handleback=()=>{
        history.push("/Admin")
    }
    const [file,setFile]=useState(null)
    const [Name,setname]=useState("")
    const [Genere,setgenere]=useState("")
    const [Synopsis,setsynopsis]=useState("")
    const handlesubmit=async()=>
    {
        const formData = new FormData();
        
        formData.append("MovieName",Name)
        formData.append("MovieGenere",Genere)
        formData.append("MovieSynopsis",Synopsis)
        console.log(Synopsis,Name,Genere)
        await Axios.put("http://localhost:4000/EditMovieDetails",formData)
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
        <div className="EditMoviescss">
            <div>
                <label>MovieName</label>
                <input type="text" onChange={e=>setname(e.target.value)}></input>
            </div>
            
            
            <div>
                <label >Genere</label>
          <select onChange={e=>setgenere(e.target.value)}>
        <option value="drama">Drama</option>
        <option value="romance">Romance</option>
        <option value="action">Action</option>
        <option value="thriller">Thriller</option>
        </select>
        </div>
            <div>
            <label>MovieSynopsis</label>
                <textarea onChange={e=>setsynopsis(e.target.value)}></textarea>
            </div>
           
            <div>
                <button onClick={handlesubmit}>Submit</button>
            </div>
            <div>
            <button onClick={handleback}>Back</button>
            </div>
        </div>
    )
}


export default EditMovies
