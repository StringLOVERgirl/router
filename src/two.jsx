import { Link } from "react-router-dom"

export function Two(){

    return (
        <>
    <div className="two">
        <h1 style={{color:"white"}}>two</h1>
        <nav>
  
            <Link to='/one/1'>one</Link>
    
        </nav>
    </div>
    </>
    )
}