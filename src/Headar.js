import React from 'react'

const Headar = () => {
  return (
    <>
    <header>
    <section className="container main-hero-container">
    <div className="row">
    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center 
    flex-column align-items-start order-lg-first order-last">
    <h1 className="display-2">
      Online Payment Method <br/> Easy For You.
    </h1>
    <p className="main-para">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
      quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
      officiis tempora recusandae voluptate quam, nisi odio officiis
      tempora recusandae
    </p>
    <h3>Get early access for You</h3>  
    <div className="input-group mt-3">
    <input
     type="text"
     className= "rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text" 
     placeholder="Enter Your Email" 
    />
         <div className="input-group-button">Get it Now!</div>
    </div>
    </div>
     
    <div className="col-12 col-lg-6 header-right-side d-flex
       justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
          <img src="./image/hero1.jpg"
           alt="heroimg" 
          className="img-fluid"
          />

          <img 
          src="./image/hero4.jpg"
           alt="heroimg4" 
          className="img-fluid main-hero-img2" />
    </div>
  </div>
    </section>
    </header>
    </>
  )
}

export default Headar