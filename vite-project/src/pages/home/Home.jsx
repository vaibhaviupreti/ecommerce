import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

export default function Home() {
  const context =useContext(myContext);
  // console.log("context ...",context);
 const {name, rollno} = context.state
  return (
    <Layout>
      <h1 style={{color:context.color}}>Name: {name}</h1>
      <h1>Roll No: {rollno}</h1>
    </Layout>
  )
}
