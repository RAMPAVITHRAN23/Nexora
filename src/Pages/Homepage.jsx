import React from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Starting from '../Components/starting'
import OurServices from '../Components/OurServices'

const Homepage = () => {
    return (
        <div >
        <Nav/>
        <Hero/>
        <OurServices/>
        <Starting/>
        </div>
    )
}

export default Homepage