
import { useState } from 'react';
import './App.css'

function App() {
    const [ricxvi, setRicxvi] = useState(1)


    // function daklikvaLogic() {
    //   setRicxvi(ricxvi + 1)
    
    // }

    // function minusLogic() {
    //   setRicxvi(ricxvi - 1)
    // }

   

  return (
    <>

    <div className={ricxvi < 5 ? 'pirveli' : 'meore'} id="card">
      <p style={ricxvi < 5 ? {color: 'green'} : {color: 'red'}}>{ricxvi < 5 ? 'Norm' : 'Too Many'}</p>
    <h1 style={ricxvi < 5 ? {color: 'green', fontFamily: 'monospace'} : {color: 'red', fontFamily: 'cursive'}}>{ricxvi}</h1>
     {/* <button onClick={ daklikvaLogic }>+</button>
     <button onClick={ minusLogic }>-</button> */}

     <button onClick={ () => setRicxvi(ricxvi + 1) }>+</button>
     <button onClick={ () => setRicxvi(ricxvi - 1) }>-</button>
    </div>
      
    </>
  )
}

export default App





