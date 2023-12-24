import React from 'react'
import MyContext from './myContext' //1

function myState(props) {
    const state = {
        name: 'Anjana Omkashyap',
        rollno: 101
    }
    const color = 'red'
  return (
    // Passing {state} to all the components
    <MyContext.Provider value = {{state,color}}> {/* 2 wrapped with my context provider*/}
        {props.children} {/* 3 To Easily share data from parent->child*/}
    </MyContext.Provider>
  )
}

export default myState
