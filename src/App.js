import React, { Component }  from 'react';
import {Route,BrowserRouter} from "react-router-dom";
import Login from "./Login"
import Admin from "./Admin"
import Users from "./Users"
import AddMovies from "./AddMovies"
import EditMovies from "./EditMovies"
import DeleteMovies from "./DeleteMovies"
function App() {
  return (
    <div>
  <BrowserRouter>
  <switch>
    <Route path="/" exact component={Login}/>
    <Route path="/Admin" exact component={Admin}/>
    <Route path="/Users" exact component={Users}/>
    <Route path="/addmovies" exact component={AddMovies}/>
    <Route path="/editmovies" exact component={EditMovies}/>
    <Route path="/deletemovies" exact component={DeleteMovies}/>
   </switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
