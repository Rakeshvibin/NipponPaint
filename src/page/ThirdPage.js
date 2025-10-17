import React from 'react'
import './ThirdPage.css'
import image1 from '../images/Enamel-Shade-Card-2025-Thumbnail-2-512x1024.avif'
import image2 from '../'

const ThirdPage = () => {
  return (
    <div>
       <div class="container my-5">
    <div class="row g-4 justify-content-center">

     
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 custom-card">
          <a href="#">
            <img className="card-img-top rounded" src={image1} alt="Color Image" />
          </a>
          <div class="card-body">
            <h5 class="card-title">10 Trendy Colour Combinations for..</h5>
            <p class="card-text">
              From earthy clay-sage to striking charcoal-terracotta, 2025’s living room color combinations..
            </p>
            <a href="#" class="read-more">Read more..</a>
          </div>
        </div>
      </div>

     
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 custom-card">
          <a href="#">
            <img class="card-img-top rounded" src="/images/NipponPaint/undefined-2.avif" alt="Color Image" />
          </a>
          <div class="card-body">
            <h5 class="card-title">10 Trendy Colour Combinations for..</h5>
            <p class="card-text">
              From earthy clay-sage to striking charcoal-terracotta, 2025’s living room color combinations..
            </p>
            <a href="#" class="read-more">Read more..</a>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 custom-card">
          <a href="#">
            <img class="card-img-top rounded" src="/images/NipponPaint/undefined-2.avif" alt="Color Image" />
          </a>
          <div class="card-body">
            <h5 class="card-title">10 Trendy Colour Combinations for..</h5>
            <p class="card-text">
              From earthy clay-sage to striking charcoal-terracotta, 2025’s living room color combinations..
            </p>
            <a href="#" class="read-more">Read more..</a>
          </div>
        </div>
      </div>
    </div>
       
    </div>
  </div>

   
  )
}

export default ThirdPage
