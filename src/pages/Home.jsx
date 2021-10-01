import React from 'react'
import Announcement from '../componants/Announcement'
import Slider from '../componants/Slider'
import Navbar from '../componants/Navbar'
import Categories from '../componants/Categories'
import Products from '../componants/Products'
import Newsletter from '../componants/Newsletter'
import Footer from '../componants/Footer'
import { Offers } from '../componants/Offers'

const Home = () => {
    return (
        <div>
        <Announcement/>
          <Navbar/>
          <Slider/>
          <Offers/>
          <Categories/>
          <Products/>
          <Newsletter/>
          <Footer/>
        </div>
           
    )
}

export default Home
