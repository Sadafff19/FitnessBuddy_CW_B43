import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import {Routes,Route, Navigate} from 'react-router-dom'
import Notifications from './Components/Notifications'
import Message from './Components/Message'
import ProfilePage from './Components/ProfilePage'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import { useFitness } from './context/fitnessContext'

function App() {

  const {isLogged}=useFitness()

  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path='/Notifications' element={<Notifications/>}/>
        <Route path='/Message' element={<Message/>}/>
        <Route path='/ProfilePage' element={<ProfilePage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}></Route>
      </Routes>
    </>
  )
}

export default App
