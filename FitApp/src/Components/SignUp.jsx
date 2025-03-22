import { use, useState } from "react"
import {NavLink} from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth,db} from '../firebase/firebase'
import { setDoc,doc } from "firebase/firestore";
import { CircleCheckBig } from 'lucide-react';
import {toast} from 'react-toastify'
import { useFitness } from "../context/fitnessContext";

const SignUp = () => {

    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [status,setStatus]=useState('')

    const {setUsername}=useFitness()

    function handleFname(e){
        setFname(e.target.value)
    }

    function handleLname(e){
        setLname(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePass(e){
        setPass(e.target.value)
    }

    const handleSignup= async (e)=>{
        e.preventDefault()
        console.log(fname,lname)
        const first=e.target.firstName.value
        const last=e.target.lastName.value
        setUsername({ first, last })
        try{
            if(!email||!pass||!fname||!lname){
                alert('Each field is rquired! Please Fill the empty inputs')
            }
            await createUserWithEmailAndPassword(auth,email,pass)
            const user=auth.currentUser
            console.log(user)
            if(user){
                await setDoc(doc(db,'Users',user.uid),{
                    email : user.email,
                    firstname : fname,
                    lastname : lname
                })
            }
            setStatus('user registered successfully!')
        }catch(error){
            console.log(error.message)
            alert(error.message)
        }
    }

    console.log(email,fname,lname,pass)
    return(
        <>
            <div className="formback2">
                {status && (
                    <div className="okmess">{status} <CircleCheckBig color="#1b7709" /></div>
                )}
            <div className="loginform">
                <p className='logoname'>FITNESS BUDDY</p>
                <label htmlFor="name">First Name</label>
                <input type="name" placeholder="enter first name" name="firstName" onChange={handleFname} value={fname}/>
                <label htmlFor="name">Last Name</label>
                <input type="name" placeholder="enter Last name" name="lastName" onChange={handleLname} value={lname}/>
                <label htmlFor="email">Your email</label>
                <input type="email"  placeholder="enter email" onChange={handleEmail} value={email}/>
                <label htmlFor="email">Your password</label>
                <input type="password" placeholder="password" onChange={handlePass} value={pass}/>
                <button className='signup' onClick={handleSignup}>Sign Up</button>
                <p className='register'>Already registered?<NavLink to='/Login'>Sign In</NavLink></p>
            </div>
        </div>
        </>
    )
}

export default SignUp