import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <header className='Header'>
        <h1>오늘은 </h1>  
        <h1>{new Date().toDateString()}</h1>  
    </header>
  )
}

export default Header