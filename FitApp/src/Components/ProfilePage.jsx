import { useFitness } from '../context/fitnessContext'
import '../styles/ProfilePage.css'
import  {UserRoundPen,CircleUserRound, Badge} from 'lucide-react'

const ProfilePage = () =>{

    const {username}=useFitness()
    let obj=[{},{},{},{}]

    return(
       <>
        <div className="profileBack">
            <div className='profilepicBack'>
                <CircleUserRound strokeWidth='0.5px' className='userpic'/>
            </div>
        </div>
        <div className='Details'>
            <div className='detail'>
                {/* <h2>{{username}?username:Guest}</h2> */}
                <h1>name</h1>
                <p>profession</p>
                <p>based in place</p>
                <button className='p1'>Create Community</button>
                <button className='p2'>Join Community</button>
            </div>
            <div className='comDetail'>
                <div className='badgebox'>
                    <Badge className='cbadge' strokeWidth='5px'/>
                    <Badge className='cbadge' strokeWidth='5px'/>
                    <Badge className='cbadge' strokeWidth='5px'/>
                </div>
                <div className='com2'>
                    <p>Joined<br/> <span className='num'>37</span></p>
                    <p>Created<br/><span className='num'>21</span></p>
                    <p>Posts <br/> <span className='num'>148</span></p>
                </div>
            </div>
        </div>   
        <div className='under'></div>
        <p className='activity'>Recent Activity</p>

       </> 
    )
}
export default ProfilePage
