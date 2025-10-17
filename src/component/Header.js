import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" 

  >
  <div className="container-fluid d-flex">
    
    
    <a href="#">
      <img width="250" s height="71" src="https://nipponpaint.co.in/wp-content/uploads/2024/09/cropped-Nippon-Taglines_Nippon-Paint-250x71.png" alt="Logo"/>
    </a>
    
   
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    
   
    <div  className="collapse navbar-collapse " id="main">
      <ul  className="navbar-nav me-5 pe-5 ms-auto">
        
       
        <li className="nav-item dropdown">
           <a  className="nav-link  dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">Product</a>  
          
          <ul  className="dropdown-menu">

            <li><Link className="dropdown-item" to="/product">Interior Wall Paints</Link></li>
            <li><a  className="dropdown-item" href="#">Exterior Wall Paints</a></li>
             <li><a  className="dropdown-item" href="#">Enamel</a></li>
            <li><a className="dropdown-item" href="#">texture</a></li>


          </ul>
        </li>
        <li  className="nav-item dropdown">
          <a  className="nav-link  dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">Inspirations</a>
          <ul  className="dropdown-menu">

            <li><Link className="dropdown-item" to={"/page2"}> blog</Link></li>
            <li><a  className="dropdown-item" href="#">Exterior Wall Paints</a></li>
             <li><a  className="dropdown-item" href="#">Enamel</a></li>
            <li><a className="dropdown-item" href="#">texture</a></li>


          </ul>
        </li>
        <li  className="nav-item dropdown">
          <a  className="nav-link  dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">colors</a>
          <ul  className="dropdown-menu">

            <li><a className="dropdown-item" href="#">Interior Wall Paints</a></li>
            <li><a className="dropdown-item" href="#">Exterior Wall Paints</a></li>
             <li><a className="dropdown-item" href="#">Enamel</a></li>
            <li><a className="dropdown-item" href="#">texture</a></li>


          </ul>
        </li>
      <li className="nav-item dropdown">
          <a className="nav-link  dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">connect</a>
          <ul className="dropdown-menu">

            <li><a className="dropdown-item" href="#">Interior Wall Paints</a></li>
            <li><a className="dropdown-item" href="#">Exterior Wall Paints</a></li>
             <li><a className="dropdown-item" href="#">Enamel</a></li>
            <li><a className="dropdown-item" href="#">texture</a></li>


          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">findUS</a>
          <ul className="dropdown-menu">

            <li><a className="dropdown-item" href="#">Interior Wall Paints</a></li>
            <li><a className="dropdown-item" href="#">Exterior Wall Paints</a></li>
             <li><a className="dropdown-item" href="#">Enamel</a></li>
            <li><a className="dropdown-item" href="#">texture</a></li>


          </ul>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </a>
          <div className="dropdown-menu p-3">
            <form action="">
              <input type="search" className="form-control" placeholder="Search..."/>
            </form>
          </div>
        </li>
      </ul>
        
       
      
    </div>
  </div>
</nav>     </div>

  )

}


export default Header
