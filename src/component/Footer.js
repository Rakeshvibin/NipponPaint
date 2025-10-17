import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <section>
        <header className="header py-4 email" >
          <div className="container d-flex flex-row justify-content-around col-sm-1 col-lg col-md-12">
            <h6>tu@nipponpaint.co.in</h6>
            <h6>18004253636</h6>
            <h6>Download Catalogue</h6>
          </div>
        </header>
      </section>

      <section >
        <div className="container row d-flex ms-5 py-5 text-white">
          <div className="col">
            <p>
              <strong>Logo</strong> <br />
              Nippon Paint produces high-quality paints with an emphasis on
              innovation and eco-friendliness. We are driven by the philosophy
              to consistently deliver paint solutions that not only serve your
              needs, but also protect the world we live in.
            </p>
          </div>

          <div className="col">
            <h6>Site Links</h6>
            <hr />
            <h6>Newsroom</h6>
            <hr />
            <h6>Downloads</h6>
            <hr />
            <h6>Terms & Conditions</h6>
            <hr />
            <h6>Privacy Policy</h6>
            <hr />
          </div>

          <div className="col">
            <h6>Products</h6>
            <hr />
            <h6>Interior Wall Paints</h6>
            <hr />
            <h6>Exterior Wall Paints</h6>
            <hr />
            <h6>Construction Solutions</h6>
            <hr />
            <h6>Industrial Coatings</h6>
            <hr />
          </div>

          <div className="col">
            <h6>Get To Know Us</h6>
            <hr />
            <h6>About</h6>
            <hr />
            <h6>Green Commitment</h6>
            <hr />
            <h6>Innovation</h6>
            <hr />
            <h6>Official Merchandise</h6>
            <hr />
            <h6>ColourVision</h6>
            <hr />
            <h6>Career</h6>
            <hr />
          </div>
        </div>
      </section>

      <section
       
        className="text-white py-4 col-lg-12"
      >
        <footer className="footer">
          <div className="col d-flex justify-content-center">
            &copy; 2024-2025 Nippon Paint (India) Private Limited. All rights
            reserved.
          </div>
        </footer>
      </section>
    

    </div>
  )
}

export default Footer
