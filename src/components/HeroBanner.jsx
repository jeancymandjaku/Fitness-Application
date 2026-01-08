import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <>
        <h1>Club De Fitness</h1>
        <h2>Sculptez Votre Corps Idéal</h2>
        <h3>Rejoignez-Nous et Transformez Votre Vie Aujourd'hui!</h3>

        <div>
            <a href="#exercices">Explore Exercices</a>
            <h2 style={{fontWeight:'600',color:"#ff2625", }}>Exercice</h2>
            <img src={HeroBannerImage} alt="Hero Banner" />
        </div>
    </>
  )
}

export default HeroBanner