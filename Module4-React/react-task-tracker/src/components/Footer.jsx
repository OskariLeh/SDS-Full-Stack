import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2025</p>
      <Link to={"/About"}>About</Link>
    </footer>
  )
}

export default Footer
