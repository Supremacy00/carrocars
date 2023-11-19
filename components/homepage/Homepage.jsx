import React from 'react'
import Hero from '../hero/Hero'
import WhyChooseUs from '../whyChooseUs/WhyChooseUs'
import FeaturedListings from '../featureListings/FeaturedListings'
import BrowseByType from '../browsebytype/BrowseByType'
import PopularListings from '../popularListings/PopularListings'
import DreamCar from '../dreamCar/DreamCar'
import Testimonials from '../testimonials/Testimonials'
import Footer from '../footer/Footer'


const Homepage = () => {
  return (
    <div>
        <Hero />
        <WhyChooseUs />
        <FeaturedListings />
        <BrowseByType />
        <PopularListings />
        <DreamCar />
        <Testimonials />
    </div>
  )
}

export default Homepage