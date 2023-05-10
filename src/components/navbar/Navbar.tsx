import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
      <ul className='mane'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Add Contact</Link></li>
        <li><Link to="/list">All Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar