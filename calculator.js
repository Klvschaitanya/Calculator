import React,{useState} from 'react'
import './App.css';

export default function App() {
  const [result,setResult] = useState("");
  const [input,setInput]= useState("");
  const handler = e =>{
    setInput(e.target.value);
  }
const resultHandler =()=>{
  const evalresult = eval(input);
   setResult(evalresult);
}
 
  return (
    <div>
    <center>
      <input type='text' name='input' value={input} onChange={handler}/>
   <br/>
   <br/>
   <button onClick={resultHandler} >calculate</button>
   <br/>

<p>Result: {result}</p>

<button onClick={()=>setInput(input+'1')}> 1</button>
<button onClick={()=>setInput(input+'2')}> 2</button>
<button onClick={()=>setInput(input+'3')}> 3</button>
<button onClick={()=>setInput(input+'4')}> 4</button>
<button onClick={()=>setInput(input+'5')}> 5</button><br/>
<button onClick={()=>setInput(input+'6')}> 6</button>
<button onClick={()=>setInput(input+'7')}> 7</button>
<button onClick={()=>setInput(input+'8')}> 8</button>
<button onClick={()=>setInput(input+'9')}> 9</button>
<button onClick={()=>setInput(input+'0')}> 0</button><br/>
<button onClick={()=>setInput(input+'+')}> +</button>
<button onClick={()=>setInput(input+'-')}> -</button>
<button onClick={()=>setInput(input+'/')}> /</button>
<button onClick={()=>setInput(input+'*')}> *</button>
<button onClick={()=>{setInput('');setResult('')}}> clr</button>
    </center>
    </div>

   
  )
}
