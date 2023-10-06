import React, { useRef, useState } from 'react'

function Calculatordisp() {

var[value1,setValue]=useState("")

var cal=()=>{
    var sto=inp.current.value
    var numberedResult=eval(sto)
    setValue(numberedResult)
    
    console.log(sto);
        }

var inp=useRef()
    var disp=()=>{
setValue(value1.slice(0,value1.length-1))
    }

  
  return (
    <div>
        <h4>Calculatordisp</h4>
        <input type='text' value={value1} ref={inp} ></input><br></br>
        <button onClick={()=>setValue(value1+"1")}>1</button>
        <button onClick={()=>setValue(value1+"2")}>2</button>
<button onClick={()=>setValue(value1+"+")}>+</button>
<button onClick={cal}>=</button>
<button onClick={disp}>del</button>
<button onClick={()=>setValue("")}>clear</button>
    </div>
  )
}

export default Calculatordisp;