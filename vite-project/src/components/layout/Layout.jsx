//some components are displayed in every page(constant)
import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div className="content">
             {children} {/* changes */}
        </div>
        <Footer/>
    </div>
  )
}
