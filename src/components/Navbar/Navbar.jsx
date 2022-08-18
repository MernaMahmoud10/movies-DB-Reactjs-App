import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder" to="">Noxe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {props.userData ?
                <>

                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="movies">Movies</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="tvShows">Tvshows</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="people">People</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="networks">Networks</Link>
                  </li>
                </>
                : ""
              }

            </ul>

            {props.userData ?
                <>
                <span className='pe-3'>welcome {props.userData.first_name}!</span>
                </>
                : ""
            }
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                <i className='fab fa-instagram me-2'></i>
                <i className='fab fa-facebook me-2'></i>
                <i className='fab fa-twitter me-2'></i>
                <i className='fab fa-youtube me-2'></i>
              </li>

              {props.userData ?
                <>
                  <li className="nav-item">
                    <span className="nav-link cursorPointer" onClick={props.logout}>Logout</span>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="login">Login</Link>
                  </li>

                </>

              }




            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
