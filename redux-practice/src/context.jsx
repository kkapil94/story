import { createContext, useState } from "react";


const CounterContext = createContext();

export const CounterProvider = ({children})=>{
    const [count,setCounter] = useState(0);
    const incCounter = ()=>setCounter(count+1);
    const decCounter = ()=>count>1&&setCounter(count-1)
 return(
        <CounterContext.Provider value={{count,incCounter,decCounter}}>
            {children}
        </CounterContext.Provider>
    )
}
export default CounterContext