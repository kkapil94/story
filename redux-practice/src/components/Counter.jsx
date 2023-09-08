import React, { useContext } from "react"
import "../App.css"
import { useDispatch, useSelector } from "react-redux"
import { incCounterAction,decCounterAction } from "../actions/counterActions"
import CounterContext from "../context"


export function Counter(){
    const {count,incCounter,decCounter} = useContext(CounterContext)
    const dispatch = useDispatch()
    const {counter} = useSelector(state=>state.counter)
    return(<>
        <div className="home">
            <h1>Counter</h1>
            <div className="button-cont">
                <button onClick={()=>dispatch(decCounterAction())}>Dec</button>
                {/* <button onClick={()=>decCounter()}>Dec</button> */}
                <span>{counter}</span>
                {/* <button onClick={()=>incCounter()}>Inc</button> */}
                <button onClick={()=>dispatch(incCounterAction())}>Inc</button>
            </div>
        </div>
    
    </>)
}