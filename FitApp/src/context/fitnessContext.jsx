import { createContext, useState,useContext } from "react";

const FitnessContext=createContext()

export const FitnessContextProvider=({children})=>{

    const[username,setUsername]=useState('')
    const [workout,setWorkout]=useState([])
    const [isLogged,setisLogged]=useState(false)

    return(
        <FitnessContext.Provider value={{ isLogged, setisLogged, workout, setWorkout,username,setUsername }}>
            {children}
        </FitnessContext.Provider>
    )
}

export const useFitness = () => {
    return useContext(FitnessContext);
};
