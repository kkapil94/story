import React from "react"
import "../App.css"
import { useDispatch, useSelector } from "react-redux"
import { incCounterAction,decCounterAction } from "../actions/counterActions"

export function Counter(){
    const dispatch = useDispatch()
    const {counter} = useSelector(state=>state.counter)
    return(<>
        <div className="home">
            <h1>Counter</h1>
            <div className="button-cont">
                <button onClick={()=>dispatch(decCounterAction())}>Dec</button>
                <span>{counter}</span>
                <button onClick={()=>dispatch(incCounterAction())}>Inc</button>
            </div>
        </div>
    
    </>)
}