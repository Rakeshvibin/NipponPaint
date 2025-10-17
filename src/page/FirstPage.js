import React from 'react'
import image from '../images/image.png'
import germs from '../images/germs-on-the-wall-goodbye-to-them-nippon-paint-1.jpg'
import weather from '../images/nippon-paint-weatherbond8-1.jpg'
import product from '../images/our-product-1-2-1024x376.webp'
import girl from '../images/1163887-holii.webp'
import girl2 from '../images/1701363814207_iStock657035950.avif'
import wa11 from '../images/magenta-colour-combinations-for-home-450x450.jpg'
import dark from '../images/Dark-exterior-wall-paint-colours-for-home-1024x640-1.jpg'
import pvc from '../images/pvc-arche-design.jpg'
import build from '../images/12-of-the-Most-Beautiful-Buildings-That-Defy-Gravity.jpg'
import color1 from '../images/color1.jpeg'
import p14 from '../images/p14.jpg'

import "./FirstPage.css"


const FirstPage = () => {
  return (
    <>
     
      <div id="carouselExampleControls" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={germs}
              className="d-block img-fluid w-100 col-sm-3 col-md-12 carousel-img"
              alt=""
            />
          </div>

          <div className="carousel-item">
            <img
              src={weather}
              className="d-block vh-100 w-100 col-sm-12 col-md-12 carousel-img"
              alt=""
            />
          </div>

          <div className="carousel-item">
            <img
              src={image}
              className="d-block vh-100 w-100 col-sm-12 col-md-12 carousel-img"
              alt=""
            />
          </div>
        </div>

      
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <div className="media-icons d-flex flex-column gap-3 pt-5 fixed-bottom py-5">
          <a href="#"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
          <a href="#"><i className="fa-brands fa-facebook fa-fade fa-2xl fb"></i></a>
          <a href="#"><i className="fa-brands fa-x fa-fade fa-2xl x"></i></a>
          <a href="#"><i className="fa-brands fa-youtube fa-fade fa-2xl yt"></i></a>
          <a href="#"><i className="fa-brands fa-instagram fa-fade fa-2xl ig"></i></a>
        </div>
      </div>

      <section className="products-section container-fluid col-md">
        <div className="row col-12">
          <div className="col d-flex justify-content-center">
            <div>
              <h1 className="d-flex justify-content-center py-3 text-white">OUR PRODUCTS</h1>
              <div className="col d-flex justify-content-center text-white">
                <p className="col-5 col-lg-12">
                  No matter what the wall is, Nippon Paint perfectly colours the surface and also satisfies every taste.
                  Our products are the ideal concoction of innovation and beauty. We have got the right paint to complete
                  your look. Browse through our extensive collection of emulsions (for both interiors & exteriors), enamels,
                  undercoats for a wide range of surfaces from cement to metal to wood.
                </p>
              </div>

              <div className="d-flex justify-content-center pe-4 py-2">
                <button className="btn btn-outline-light" type="button">View All</button>
              </div>

              <img src={product} alt="Products" className="product-img" />
            </div>
          </div>
        </div>
      </section>
        <section className="trends-section py-2 col-sm-1 col-lg col-md-12">
      <div className="container">
        <h1 className="d-flex justify-content-center trends-title">
          TRENDS & INSPIRATIONS
        </h1>

     
        <div className="row">
          <div className="col-12 col-lg-3 img-fluid px-2 py-2">
            <a href="#">
              <img
                width="280"
                height="390"
                src={girl}
                alt="Trend 1"
              />
            </a>
          </div>

          <div className="col-12 col-lg-3 img-fluid px-2 py-2">
            <a href="#">
              <img
                width="280"
                height="390"
                src={girl2}
                alt="Trend 2"
              />
            </a>
          </div>

          <div className="col-12 col-lg-3 img-fluid px-2 py-2">
            <a href="#">
              <img
                width="280"
                height="390"
                src={wa11}
                alt="Trend 3"
              />
            </a>
          </div>

          <div className="col-12 col-lg-3 img-fluid px-2 py-2">
            <a href="#">
              <img
                width="280"
                height="390"
                src={dark}
                alt="Trend 4"
              />
            </a>
          </div>
        </div>

 
        <div className="row">
          <div className="col-12 col-lg-3 img-fluid px-2 py-2">
            <a href="#">
              <img
                width="280"
                height="390"
                src={pvc}
                alt="Trend 5"
              />
            </a>
          </div>

          <div className="col-12 col-lg-3 img-fluid px-2 py-2">
            <a href="#">
              <img
                width="280"
                height="390"
                src={build}
                alt="Trend 6"
              />
            </a>
          </div>

          <div className="col-12 col-lg-3 img-fluid px-2 py-2">
            <a href="#">
              <img
                width="280"
                height="390"
                src={color1}
                alt="Trend 7"
              />
            </a>
          </div>

          <div className="col-12 col-lg-3 img-fluid px-2 py-2">
            <a href="#">
              <img
                width="280"
                height="390"
                src="/images/1163887-holii.webp"
                alt="Trend 8"
              />
            </a>
          </div>
        </div>

      
        <div className="d-flex justify-content-center gap-5 mt-4 trends-btns">
          <button type="button" className="btn btn-outline-primary trends-btn">
            More Trends
          </button>
          <button type="button" className="btn btn-outline-primary trends-btn">
            More Trends
          </button>
        </div>
      </div>
    </section>
    
<section class="faq-section">

  <div class="container my-5">
    <div class="row g-4">

    
      <div class="col-12 col-lg-6">
        <h2 class="text-center mb-4">FREQUENTLY ASKED QUESTIONS</h2>
        <div class="accordion" id="accordionFlushExample">

          <div class="accordion-item my-2">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="false" aria-controls="collapseOne">
                Why should I use Nippon Paint?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse"
              aria-labelledby="headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                Nippon Paint’s unique range of products not only caters to your
                aesthetic needs but also to your functional needs. Besides having
                a wide range of colours, Nippon Paint offers specialty products
                such as anti-bacterial paint and low-odour paint.
              </div>
            </div>
          </div>

          <div  className="accordion-item my-2">
            <h2 className="accordion-header" id="headingTwo">
              <button  className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                aria-expanded="false" aria-controls="collapseTwo">
                How is Nippon Paint different from others?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse"
              aria-labelledby="headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Nippon Paint’s unique range of products not only caters to your
                aesthetic needs but also to your functional needs. Besides having
                a wide range of colours, Nippon Paint offers specialty products
                such as anti-bacterial paint and low-odour paint.
              </div>
            </div>
          </div>

          <div  className="accordion-item my-2">
            <h2 className="accordion-header" id="headingThree">
              <button  className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                aria-expanded="false" aria-controls="collapseThree">
                What is Eco-friendly paint?
              </button>
            </h2>
            <div id="collapseThree"  className="accordion-collapse collapse"
              aria-labelledby="headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                For exteriors, the best time to paint is when the weather is
                pleasant, without risk of high humidity or rain. For interiors,
                ambient temperature and ventilation is best.
              </div>
            </div>
          </div>

          <div className="accordion-item my-2">
            <h2  className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                aria-expanded="false" aria-controls="collapseFour">
                Best season to paint my home?
              </button>
            </h2>
            <div id="collapseFour"  className="accordion-collapse collapse"
              aria-labelledby="headingFour" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                For exteriors, the best time to paint is when the weather is
                pleasant. For interiors, there are no such restrictions, just make
                sure ventilation is available while painting.
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <button  className="btn btn-light">View</button>
        </div>
      </div>

      <div  className="col-12 col-lg-6">
        <h2 className="text-center mb-4">FEATURED ARTICLES</h2>
        <div  className="d-flex flex-wrap justify-content-center">
          <div className="p-2">
            <a href="#"><img class="img-fluid rounded shadow-sm"
                src={p14} alt="Article 1"
                width="280" height="390"/></a>
          </div>
          <div className="p-2">
            <a href="#"><img className="img-fluid rounded shadow-sm"
                src="/images/magenta-colour-combinations-for-home-450x450.jpg"
                alt="Article 2" width="280" height="390"/></a>
          </div>
        </div>
        <div  className="text-center mt-3">
          <button className="btn btn-light">View</button>
        </div>
      </div>
    </div>
  </div>

</section>

 

    </>
  )
}

export default FirstPage
