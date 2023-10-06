import React, { useRef, useState } from 'react'
import "./Calculator.css"
function Calculator() {
    var [cal,setCal]=useState("")
    var light=()=>{
document.getElementById("background").style.backgroundColor="white"
    }
    var dark=()=>{
document.getElementById("background").style.backgroundColor="black"
    }
    var inputdata=useRef()

    var val=(e)=>{
var inpsto=inputdata.current.value
var numberedResult=eval(inpsto)
setCal(numberedResult)
console.log(inpsto);
    }

   var val2=()=>{
    setCal(cal.slice(0,cal.length-1))
    }
  return (
    <div>
        
        <div id='background'>
      
      <div className='display'><input type='text' value={cal} ref={inputdata} style={{width:"200px",height:"30px"}}></input><br></br></div>

      <div className='number'>

    <div className='btns'>  <button className='btns' onClick={val2}>del</button>
      <button className='btns' onClick={light}>light-mode</button>
        <button className='btns' onClick={dark}>dark-mode</button><br></br></div> 
    
        <button className='number' onClick={()=>setCal(cal+"0")} >0</button>
      <button className='number' onClick={()=>setCal(cal+"1")}  >1</button>
       <button className='number' onClick={()=>setCal(cal+"2")} >2</button>
       <button className='number' onClick={()=>setCal(cal+"3")} >3</button>
       <button className='number' onClick={()=>setCal(cal+"4")} >4</button>
       <button className='number' onClick={()=>setCal(cal+"5")} >5</button>
       <button className='number' onClick={()=>setCal(cal+"6")} >6</button>
       <button className='number' onClick={()=>setCal(cal+"7")} >7</button>
       <button className='number' onClick={()=>setCal(cal+"8")} >8</button>
       <button className='number' onClick={()=>setCal(cal+"9")} >9</button>
       <button className='number' onClick={()=>setCal(cal+"+")}>+</button>
       <button className='number' onClick={()=>setCal(cal+"-")}>-</button>
       <button className='number' onClick={()=>setCal(cal+"*")}>*</button>
       <button className='number' onClick={()=>setCal(cal+"%")}>%</button>

       <button className='number' onClick={val}>=</button>
       <button onClick={()=>setCal("")}>clear</button>

       


      </div>
             </div>
       
    </div>
  )
}

export default Calculator;