import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import SignUp from "./SignUp";
import Messages from "./Messages";
import NavBar from "./NavBar";

function App() {
  return( 
  <div>
    <NavBar/>
    <Switch>
    <Route exact path='/' >
      <Home />
    </Route>
    <Route path='/about' >
      <About/>
    </Route>  
    <Route path='/login'>
      <Login/>
    </Route>
    <Route path='/signup'>
      <SignUp/>
    </Route>
    <Route path='/messages'>
      <Messages/>
    </Route>
    <Route path='*' >
      <h1 style={{color: 'red'}}>Page Does Not Exist</h1>
    </Route>
    </Switch>
   </div>
  )
}

export default App