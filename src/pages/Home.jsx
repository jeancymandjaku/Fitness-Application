import React from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercices from '../components/Exercices'

const Home = () => {
  return (
    <>
       <HeroBanner/>
       <SearchExercises />
       <Exercices />
    </>
  )
}

export default Home