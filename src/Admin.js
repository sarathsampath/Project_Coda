import React from 'react'
import { useHistory} from "react-router-dom"
import "./Admin.css"
function Admin() {
    const history=useHistory()
    const handleAdd=()=>{
        history.push("/addmovies")
    }
    const handleEdit=()=>{
        history.push("/editmovies")
    }
    const handleDelete=()=>{
        history.push("/deletemovies")
    }
    const handleback=()=>{
        history.push("/")
    }
    const handleMovies=()=>{
        history.push("/Users")
    }
    return (
        <div>
            <div className="header">
                <h3>Add/Modify/Delete</h3>
            </div>
        <div className="Admincss">
            <div className="AdminElements">
                <p>Please Click AddMovies To Add New Movies</p>
              <button onClick={handleAdd}>Add Movies</button>
            </div>
           <div className="AdminElements">
            <p>Please Click EditMovies To Update Existing Movies</p>
            <button onClick={handleEdit}>Edit Movies</button>
           </div>
          <div className="AdminElements"> 
            <p>Please Click DeleteMovies To Delete Existing Movies</p>
            <button onClick={handleDelete}>Delete Movies</button>
          </div>
          <div className="AdminElements"> 
            <p>Please Click Here To Move To Movies Reviews</p>
            <button onClick={handleMovies}>Movie Review</button>
          </div>
           <div className="AdminElements">
            <button onClick={handleback}>Logout</button>
           </div>
           
        </div>
        </div>
    )
}

export default Admin
