import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
         <Link to='/'>Comment</Link>
         <Link to='/allmessage'>update/delete/messages</Link>  
    </div>
  )
}

export default Header