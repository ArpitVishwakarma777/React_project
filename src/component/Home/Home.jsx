import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Dalbati from "../../assets/image/Dal Bati.jpeg";
import Sev from "../../assets/image/Sev.jpeg";
import Paratha from "../../assets/image/aloo parratha.jpeg";
import Poori from "../../assets/image/Poori.jpeg";
import FullThal from "../../assets/image/Indian veg thali.jpeg";
import MakkaChapati from "../../assets/image/Makki Ki Roti Sarson Ka Saag.png";
import Carousel1 from "../../assets/image/carousel1.png";
import Carousel2 from "../../assets/image/carousel2.png";
import 'bootstrap/dist/js/bootstrap.bundle'

export default function Home() {
  return (
    <div>
      {/* <div className="mainBox">
        <div className="blurBox bg-secondary text-white container-fluid d-flex justify-content-center align-items-center position-absolute">
          <div className="textBox" />
        </div>
        <div
          className="position-relative d-flex justify-content-center align-items-center "
          style={{ height: "50vh" }}
        >
          <div className="mx-5">
            <h1 className="text mb-4">
              "Bringing the taste of home, one tiffin at a time."
            </h1>
            <div className="d-flex justify-content-xs-center">
              <button
                type="button"
                className="btn rounded btn-danger order_now   my-4 mx-5 w-sm-25 rounded "
              >
                Order Now!
              </button>
            </div>
          </div>
        </div>
      </div>
      */}
      {/* For Carousels */}
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Carousel1} className="d-block h-50 w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={Carousel2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="d-flex justify-content-center my-4">
        <h1>One day special</h1>
      </div> 
      {/* For Cards */}
      <div className="container">
        <div className="row">
          <div className="col1 col-sm-4 col-lg-3 col-xs-6 pb-sm-3 py-3 py-sm-0">
            <div className="card box-shadow">
              <img src={Dalbati} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Dal-Bati</h5>
                <p className="card-text1">
                  A plate with 5 ghee-soaked Batis, served with a bowl of hot
                  Dal and fresh salad.
                </p>
                <a href="#" className="btn btn-primary">
                  Add Card
                </a>
              </div>
            </div>
          </div>
          {/* For second card */}
          <div className="col2 col-sm-4 col-lg-3 col-xs-6 pb-sm-3 py-3 py-sm-0">
            <div className="card box-shadow">
              <img src={Paratha} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Dahi-Paratha</h5>
                <p className="card-text2">
                  (Panjabi Tad)A serving of 5 soft parathas with fresh yogurt
                  and flavorful spices.
                </p>
                <a href="#" className="btn btn-primary">
                  Add Card
                </a>
              </div>
            </div>
          </div>
          {/* For third card */}
          <div className="col3 col-sm-4 col-lg-3 col-xs-6 pb-sm-3 py-3 py-sm-0">
            <div className="card box-shadow">
              <img src={Sev} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sev-veg &amp; more</h5>
                <p className="card-text3">
                  {/* A plate with 4-5 soft rotis, extra crispy gram flour noodles
        curry,and  salad.*/}
                </p>
                <a href="#" className="btn btn-primary">
                  Add Card
                </a>
              </div>
            </div>
          </div>
          {/* For fourth card */}
          <div className="col4 col-sm-4 col-lg-3 col-xs-6 pb-sm-3 py-3 py-sm-0">
            <div className="card box-shadow  ">
              <img src={Poori} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Poori special</h5>
                <p className="card-text4">
                  Enjoy 5 fluffy puris paired with a flavorful potato curry and
                  a side of fresh salad.
                </p>
                <a href="#" className="btn btn-primary">
                  Add Card
                </a>
              </div>
            </div>
          </div>
          {/* For Five,th card */}
          <div className="col5 col-sm-4 col-lg-3 col-xs-6 pb-sm-3 py-3 py-sm-0">
            <div className="card box-shadow">
              <img src={FullThal} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sev-veg &amp; more</h5>
                <p className="card-text5">
                  India flavors in one plate Roti, Sabji, Dahi, Salad, and more
                  complete thali.
                </p>
                <a href="#" className="btn btn-primary">
                  Add Card
                </a>
              </div>
            </div>
          </div>
          {/* For Sixth card */}
          <div className="col6 col-sm-4 col-lg-3 col-xs-6 pb-sm-3 py-3 py-sm-0">
            <div className="card box-shadow">
              <img src={MakkaChapati} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sev-veg &amp; more</h5>
                <p className="card-text6">
                  Taste tradition with 4 Makki di Roti and full plat Sarson da
                  Saag- test of panjabi
                </p>
                <a href="#" className="btn btn-primary">
                  Add Card
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
