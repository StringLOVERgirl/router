import { useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export function One({increase,count}){

let {id} = useParams()
let state = useLocation()

useEffect(() => {
increase()
    return(()=>{
console.log('razmont')
    }
)
},[])

    return (
    <>
    <div className={`one one${id}`}>
        <h1>текущий комопнент One
            <br/>
            айди {id?id:''}
            <br/>
            {state.state?'свободный айди'+state.state.nourlid :'переход не с главной страницы'}
            <br/>
            {count}</h1>
    </div>
    </>  
    )
}