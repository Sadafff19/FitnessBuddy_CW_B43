import Footer from './footer'
import Workout from './workouts'
import FrequentlyAsked from './frequentQues'
import MainSection from './mainSection'

const Home=()=>{
    return(
        <>
            <div className="homePage">
                <div className='homeBack'>
                    <h2>Find Your Perfect Workout Partner. </h2>
                    <h2>Your Fitness. Your Community</h2>
                    <div className="backdiv">
                        <p>FitnessBuddy is a social fitness app that connects people with the same fitness interests and exercise routines. Whether you're into weightlifting, yoga, running, or HIIT workouts, FitnessBuddy helps you find like-minded workout partners, share progress, and stay motivated together. With personalized matches, group challenges, and real-time chat, it's the perfect way to stay active and build a supportive fitness community.</p>
                    </div>
                    <div className="backdiv2">
                    <h3>No More Solo Workouts—Find Your Fitness Buddy!</h3>
                    </div>        
                </div>  
                <MainSection/>
                <p className='heading'>WORKOUT OPTIONS</p>
                <Workout/>
                <FrequentlyAsked/>
                <Footer/>
            </div>    
        </>
    )
}
export default Home