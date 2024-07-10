import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Body from '../components/Body'
import CarouselComponent from '../components/CarouselComponent'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <CarouselComponent/>
      <Body/>
    </div>
  )
}

export default Home
