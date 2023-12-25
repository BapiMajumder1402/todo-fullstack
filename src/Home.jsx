import React,{useState} from 'react'

function Home() {
    const [input, setInput]= useState('')
    return (
        <div className='container'>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/> 
            <button onClick={()=>{console.log(input)}} >Add</button>
        </div>
    )
}

export default Home
