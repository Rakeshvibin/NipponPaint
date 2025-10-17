import React from 'react'
import './Product.css'
import features from '../images/features_set-1 (1).webp'
import paint1 from '../images/paint1.jpg'

const ProductPage = () => {
  return (
    <div>
 

  <div className="my-background">
    <div className="container-fluid d-flex justify-content-center ">
      <h1 className="text-white">Interior Wall Paints</h1>
    </div>

    <div className="media d-flex flex-column gap-3 pt-5 fixed-bottom py-5">
      <a href=""><i className="fa-brands fa-linkedin fa-2xl"></i></a>
      <a href=""><i className="fa-brands fa-facebook fa-2xl"></i></a>
      <a href=""><i className="fa-brands fa-x fa-2xl"></i></a>
      <a href=""><i className="fa-brands fa-youtube fa-2xl"></i></a>
      <a href=""><i className="fa-brands fa-instagram fa-2xl"></i></a>
    </div>
  </div>

  <div className="container py-5">
    <p className="fs-5 text-secondary">
      Putting on a coat of paint is an art inspired by science. Every hue breathes a fresh wave of emotion, bringing your walls to life and filling your home with vibrant energy. Nippon Paint leverages world-className technology and innovation to bring you a wide array of kaleidoscopic colour choices and superior features that include breakthrough odour-less technology, low VOC,
       anti-bacterial and anti-fungal properties, easy wash-ability, hiding, durability and more.
    </p>

    <div className="row py-3">
      <div className="col-lg-5 card-pink d-flex align-items-center justify-content-center">
        <img src={paint1} alt="paint" className="paint-img"/>
      </div>

      <div className="col-lg-7 card-dark d-flex flex-column justify-content-center text-white">
        <h1 className="text-center mb-4">KIDZ ALL-IN-ONE PAINT</h1>
        <img src={features} alt="features" className="mx-auto d-block mb-3"/>
        <p>
          <b>NIPPON PAINT KIDZ ALL-IN-ONE PAINT:</b> As the coatings expert, we have always wanted to champion indoor safety...
        </p>
        <div className="text-center mt-3">
          <button className="btn btn-light px-4 py-2">Learn More</button>
        </div>
      </div>
    </div>
      <div className="row py-3">
      <div className="col-lg-5 card-pink d-flex align-items-center justify-content-center">
        <img src={paint1} alt="paint" className="paint-img"/>
      </div>

      <div className="col-lg-7 card-dark d-flex flex-column justify-content-center text-white">
        <h1 className="text-center mb-4">KIDZ ALL-IN-ONE PAINT</h1>
        <img src={features} className="mx-auto d-block mb-3"/>
        <p>
          <b>NIPPON PAINT KIDZ ALL-IN-ONE PAINT:</b> As the coatings expert, we have always wanted to champion indoor safety...
        </p>
        <div className="text-center mt-3">
          <button className="btn btn-light px-4 py-2">Learn More</button>
        </div>
      </div>
        <div className="row py-3">
      <div className="col-lg-5 card-pink d-flex align-items-center justify-content-center">
        <img src={paint1} className="paint-img"/>
      </div>

      <div className="col-lg-7 card-dark d-flex flex-column justify-content-center text-white">
        <h1 className="text-center mb-4">KIDZ ALL-IN-ONE PAINT</h1>
      <img src={features} className="mx-auto d-block mb-3"/>
        <p>
          <b>NIPPON PAINT KIDZ ALL-IN-ONE PAINT:</b> As the coatings expert, we have always wanted to champion indoor safety...
        </p>
        <div className="text-center mt-3">
          <button className="btn btn-light px-4 py-2">Learn More</button>
        </div>
      </div>
        <div className="row py-3">
      <div className="col-lg-5 card-pink d-flex align-items-center justify-content-center">
         <img src={paint1} className="paint-img"/>
      </div>

      <div className="col-lg-7 card-dark d-flex flex-column justify-content-center text-white">
        <h1 className="text-center mb-4">KIDZ ALL-IN-ONE PAINT</h1>
        <img src={features} className="mx-auto d-block mb-3"/>  
        <p>
          <b>NIPPON PAINT KIDZ ALL-IN-ONE PAINT:</b> As the coatings expert, we have always wanted to champion indoor safety...
        </p>
        <div className="text-center mt-3">
          <button className="btn btn-light px-4 py-2">Learn More</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>


    </div>
  )
}

export default ProductPage
