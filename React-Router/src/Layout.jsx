import React from 'react'
import Header from './Component/Header/Header';
import {Outlet} from 'react-router-dom'
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    {/* <Home />  */}
    <Footer />
    </>
  )
}

export default Layout
