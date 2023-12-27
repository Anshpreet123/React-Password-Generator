import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
   const [length , setLength] = useState(5);
   const [number , setNumber] = useState(false);
   const [char , setChar] = useState(false);
   const [password , setPassword] = useState('');

   const passRef = useRef(null);

   const passwordGenerator = useCallback(function(){
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number)str+="0123456789";
    if (char)str+="~!@#$%^&*()_+?{}[]\/";
    let pass = ""
    for (let i = 0 ; i<length ; i++){
      let index = Math.floor(Math.random()*(str.length)+1);
      pass+= str.charAt(index);
    }
    setPassword(pass);

   } , [length , number , char  , setPassword])


   useEffect(()=>{
    passwordGenerator();
   } , [length , number , char , passwordGenerator])


  // copy to clipboard

  const copyToClip = useCallback( ()=>{
      passRef.current?.select();
      window.navigator.clipboard.writeText(password);
  } , [password]) 
  
  return (
    <>
        <div className='w-full bg-yellow-200 text-white h-60 m-auto -top-2 '>
          <div className='w-4/5 bg-slate-700 text-nowrap m-auto h-20 top-10  gap-4 space-x-4 justify-center content-center translate-y-11'>
            <input type='text' ref={passRef} readOnly value={password}  className='w-4/5 h-8 translate-y-5 text-green-500'></input>
            <button className='translate-y-5' onClick={copyToClip}>Copy</button>
          </div>

          {/* the range input and number and character inputs */}

        <div className='w-4/5 bg-slate-700 flex   m-auto h-20 top-10   justify-center content-center translate-y-10'>
           <div className='space-x-2 ml-2 mr-5'><input type='range' defaultValue={5} min={5} max={30} id = "range" onChange={(e)=>setLength(e.target.value)} ></input><label htmlFor='range'>Length : {length}</label></div>
           <div className='space-x-2 ml-4 mr-5'><input defaultChecked = {number} type='checkbox' id = "num" onChange={()=>(setNumber((prev)=> !prev))}></input><label htmlFor='num'>Number</label></div>
           <div className='space-x-2 ml-4 mr-5'><input defaultChecked = {char} type='checkbox' id = "char" onChange={()=>(setChar((prev)=> !prev))}></input><label htmlFor='char'>Character</label></div>
          </div>
        </div>
    </>
  )
}

export default App
