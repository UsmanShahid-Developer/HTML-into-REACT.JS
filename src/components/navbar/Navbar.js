import React from 'react'

export default function Navbar() {
  return (
    <div>
         {/* <!-- navbar............................... --> */}
    <nav className="navbar navbar-expand-lg navigation-wrap">
        <div className="container">
          <a className="navbar-brand" href="#">
            {/* <img src="./images/logo.png" alt="" className="img-fluid "/> */}
        </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
            <i className="fas fa-stream navbar-toggler-icon"></i>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <a className="nav-link active text-warning fw-bold " aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold nav-color" href="#about us">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-color  fw-bold" href="#explore">Explore-foods</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  nav-color fw-bold" href="#review">Reviews</a>
              </li>
              <li>
                <a className="nav-link" href="#contact">
                    <button className="btn1 btn-lg fw-bold" >1200 345 123</button>
                </a>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
