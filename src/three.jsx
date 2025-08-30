export function Three(){

    return (
        <>
    <div className="three">

        <h1 style={{color:"black"}}>three</h1>


        <div>
           {
              Array.from({length:6}).map((_,i)=><p key={'p'+i} className="running_line">Component Three</p>)
           }
        
        </div>
    </div>
    </>)}