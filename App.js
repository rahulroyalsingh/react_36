import './App.css';
import React,{useRef} from 'react'
import User from './User'
function App() {
  let inputRef=useRef(null);
  function updateInput()

  {
    inputRef.current.value='555'
    inputRef.current.style.color="red"
    inputRef.current.focus()
     
  }
    
    return (
      <div className='App'>
      <h1>ForwardRef in React </h1>
      <User ref={inputRef}/>
      <button onClick={updateInput} >Update InputBox</button>
      </div>
    );
  }

export default App;
