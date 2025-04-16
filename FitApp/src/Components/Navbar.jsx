import fitnesslogo from '../assets/Fitness_logo.jpg';
import {Bell, Send, UserRoundPen ,Search,CircleUserRound} from 'lucide-react';
import {NavLink} from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { useFitness } from '../context/fitnessContext';
const Navbar = () =>{

    const {isLogged}=useFitness()

    return(
        <>

            <div className="nav">
                <div className='logo'>
                    <img src={fitnesslogo} alt="logo" />
                    <p>FITNESS BUDDY</p>
                </div>
                <div className='search'>
                    <input type="search" placeholder='Search Exercises like Squats, Push ups etc...' />
                </div>
                <div className='notify'>
                    <NavLink to='/' className='norm' id='home'>Home</NavLink>
                    <NavLink to='/Notifications' className='norm'><Bell/></NavLink>
                    <NavLink to='/Message' className='norm'><Send/></NavLink>
                    <NavLink to='/ProfilePage' className='pro'><CircleUserRound width='31px' height='31px'strokeWidth='1.5'/></NavLink>
                    <NavLink to='/Login' className={isLogged?'logged':'login'}>Login</NavLink>
                </div>
            </div>
        </>
    ) 
}

export default Navbar
