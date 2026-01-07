import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <div>
        <h2>Fitness <Logo /></h2>
        <a href="#">Accueil</a>
    </div>
  )
}

export default Navbar