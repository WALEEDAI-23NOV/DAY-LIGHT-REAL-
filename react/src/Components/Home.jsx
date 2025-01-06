import React from 'react'
import Platform from './Platforms/Platform'
import Charachters from './Chrachters/Charachters'
import Allcharachters from './See Chrachters/Allcharachters'
import Maps from './Maps/Maps'
import Playtoday from './Play-today/Playtoday'
import Disclaimer from './18+/Disclaimer'
import Hero from './HERO/Hero'

const Home = () => {
  return (
    <>
    <Hero />
      <Platform />
      <Charachters/>
      <Allcharachters/>
      <Maps/>
      <Playtoday/>
      <Disclaimer/>
    </>
  )
}

export default Home