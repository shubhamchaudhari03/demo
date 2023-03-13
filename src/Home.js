import React from 'react';
import Navbar from './navbar';
import Headar from './Headar';
import Howwork from './Howwork';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
     <Navbar/>      
     <Headar/>
     <Howwork/>
     <About/>
     <Services/>
     <Contact/>
     <Footer/>
     
    </>
  )
}
export default Home