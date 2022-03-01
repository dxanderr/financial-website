import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import MobileMenu from '../components/MobileMenu'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <MobileMenu isOpen={isOpen} toggle={toggle}></MobileMenu>
          <Navbar toggle={toggle}></Navbar>
          <HeroSection/>
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjTwo} />
          <Services />
          <InfoSection {...homeObjThree} />
          <Footer />
        </>
    )
}

export default Home
