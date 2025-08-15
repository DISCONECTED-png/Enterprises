import React from 'react'
import Banner from './Banner'
import Intro from './Intro'
import Range from './Range'
import { Contact } from './Contact'
import WhyChooseUs from './Whyuse'
import ClientsMarquee from './client'
const Home = () => {
  return (
    <div>
        <Banner/>
      <Intro/>
      <Range/>
      <WhyChooseUs/>
      <ClientsMarquee/>
      <Contact/>
    </div>
  )
}

export default Home