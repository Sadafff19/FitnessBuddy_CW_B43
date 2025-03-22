import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState ,useEffect,useNavigate} from 'react'
import {NavLink} from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { CircleCheckBig } from 'lucide-react';
import { useFitness } from '../context/fitnessContext';

const Login = ()=>{

    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [status,setStatus]=useState('')

    const  {setisLogged,username}=useFitness()

    const handleLogin= async (e)=>{ 
        e.preventDefault()
        try{
            await signInWithEmailAndPassword(auth,email,pass)
            setStatus('User Logged in Successfully!!')
            setisLogged(true)
            window.location.href='/ProfilePage'           
        }catch(err){ 
            console.log(err.message)
        }
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePass(e){
        setPass(e.target.value)
    }

    console.log(email,pass)

    return(
        <div className="formback">
            {status && (
                    <div className="okmess">{status} <CircleCheckBig color="#1b7709" /></div>
                )}
            <div className="loginform">
                <p className='logoname'>FITNESS BUDDY</p>
                <label htmlFor="email">Your email</label>
                <input type="email"  placeholder="enter email" onChange={handleEmail} value={email}/>
                <label htmlFor="email">Your password</label>
                <input type="password" placeholder="password" onChange={handlePass} value={pass}/>
                <button className='signup' onClick={handleLogin}>Login</button>
                <p className='register'>New user?<span><NavLink to='/SignUp'>Register</NavLink></span></p>
            </div>
            <div className='copyright'>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>@2025 by FITNESS BUDDY</p>
            </div>
        </div>
    )
}

export default Login