import React from 'react'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={Logo} alt="Logo" />
        <p>© 2026 Fitness App. Tous droits réservés.</p>
      </div>
    </>
  )
}

export default Footer