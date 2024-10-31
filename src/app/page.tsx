import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import SmallBanner from './components/SmallBanner'
import Category from './components/category'
import Products from './components/products'
import VerticalBanner from './components/verticalBanner'
import NewProducts from './components/NewProducts'
import Banner2 from './components/Banner2'
import Footer from './components/Footer'


const page = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SmallBanner/>
      <Category/>
      <Products/>
      <VerticalBanner/>
      <NewProducts/>
      <Banner2/>
      <Footer/>
    </>
  )
}

export default page