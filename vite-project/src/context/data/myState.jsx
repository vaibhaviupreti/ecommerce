import React, { useState } from 'react'
import MyContext from './myContext' //1

function myState(props) {
    const [mode, setMode] =useState('light');
    const toggleMode = () =>{
      if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor="rgb(17, 24, 39)"
      }
      else{
        setMode('light');
        document.body.style.backgroundColor="#fff"
      }
    }
  return (
    // Passing {state} to all the components
    <MyContext.Provider value = {{mode,toggleMode}}> {/* 2 wrapped with my context provider*/}
        {props.children} {/* 3 To Easily share data from parent->child*/}
    </MyContext.Provider>
  )
}

export default myState
