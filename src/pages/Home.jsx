import React from 'react'
import Announcement from '../componants/Announcement'
import Slider from '../componants/Slider'
import Navbar from '../componants/Navbar'
import Categories from '../componants/Categories'
import Products from '../componants/Products'
import Newsletter from '../componants/Newsletter'
import Footer from '../componants/Footer'

const Home = () => {
    return (
        <div>
        <Announcement/>
          <Navbar/>
          <Slider/>
          <Categories/>
          <Products/>
          <Newsletter/>
          <Footer/>
        </div>
           
    )
}

export default Home
