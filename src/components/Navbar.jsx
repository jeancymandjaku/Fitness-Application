import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <Link to="/">Accueil</Link>
      <div>
        <Link to="/">
          <a href="#exercices">Exercices</a>
        </Link>
      </div>

    </>
  )
}

export default Navbar