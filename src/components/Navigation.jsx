import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div><Link to="/builder"><button>Choose a Burger</button></Link></div>
  )
}

export default Navigation