
import React from 'react'
import Movies from "./components/movies";
import SignUp from './components/signUp';
import LoginPage from './components/loginPage';
import NavBar from './components/navBar';


function App () {
  return (
    <div>
      <NavBar/>
        <Movies/>
        {/* <SignUp/> */}
        
    </div>
     
  )
}

export default App

