import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Header.css'
import webLogo from '../../assets/logo/web-logo 1.png';

export default function Header() {
    return (
      <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-white  ">
    <div className="container-fluid box ">
      <img className="img" src={webLogo} alt />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse mx-4 nav" id="navbarSupportedContent">
        <ul className="navbar-nav me-lg-auto mb-2 mb-lg-0">
          <li className="nav-item"> 
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Manu and Tiffin plan</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" tabIndex={-1}>Contect Us</a>
          </li>
        </ul>
        <div className="action_bar d-flex justify-content-between text-align-center">
          <div className="contain">
            <button style={{border: 'none'}}> <span className=" mt-1 material-symbols-outlined">
                shopping_bag
              </span></button>
            <br />
          </div>
          <div className="contain">
            <button style={{border: 'none'}}><span className="material-symbols-outlined mt-1">
                favorite
              </span> </button>
          </div>
          <div className="contain">
            <button type="button" className="btn_sign btn-outline-success">Sign-In</button>
          </div>
        </div>
      </div></div></nav>
</div>

    );
}