import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import "./Login.css"
import axios from "axios"
function Login() {
    const history=useHistory()
    const handleLogin=async()=>{
        const value1={
            Mail:Mail,
            Password:Password
    }
    console.log("hello")
        await axios.post("http://localhost:4000/login",value1)
        .then((result)=>
        {
            if(result.data.isSuccess===true)

            {  
                if(result.data.Data===1)
                {
                    history.push("/Admin")
                }
                else{
                    history.push("/Users")
                }
                 
            }
            else
            {
                console.log("invalid login")
            }
        })
        .catch((err)=>
        {
            console.log(err)
        }
        )

        
    }
    const [Mail,setMail]=useState("")
    const [Password,setPassword]=useState("")
    return (
        <div>
            <div className="LoginHeader">
                <h1>Movie Review System</h1>
            </div>
        <div className="login">
            <div className="Mail">
            <label>MailId</label>
            <input type="text" onChange={e=>setMail(e.target.value)}></input>
            </div>
            
            <div className="Password">
            <label>Password</label>
            <input type="password" onChange={e=>setPassword(e.target.value)}></input>
            </div>
            <div className="button">
                <button onClick={handleLogin}>Submit</button>
            </div>
        </div>
        </div>
    )
}

export default Login
