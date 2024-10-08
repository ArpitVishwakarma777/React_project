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
import Carousel3 from "../../assets/image/carousel3.png";
import Anikesh from "../../assets/image/carousel3.png";
import Aman from "../../assets/image/carousel3.png";
import Arpit from "../../assets/image/carousel3.png";
import Tarun from "../../assets/image/carousel3.png";
import Helper_Template from "../../assets/image/Helper_Template.jpg";

import "bootstrap/dist/js/bootstrap.bundle";
const carddata = [
  {
    src: Dalbati,
    title: "Dal-Bati",
    textClass: "card_text1",
    text: " A plate with 5 ghee-soaked Batis, served with a bowl of hot Dal and fresh salad.",
  },
  {
    src: Paratha,
    title: "Dahi-Paratha",
    textClass: "card_text2",
    text: "(Panjabi Tad)A serving of 5 soft parathas with fresh yogurt and flavorful spices.",
  },
  {
    src: Sev,
    title: "sev-veg & more",
    textClass: "card_text3",
    text: "A plate with 4-5 soft rotis, extra crispy gram flour noodles curry,and salad.",
  },
  {
    src: Poori,
    title: "Poori special",
    textClass: "card_text4",
    text: " Enjoy 5 fluffy puris paired with a flavorful potato curry and a side of fresh salad.",
  },
  {
    src: FullThal,
    title: "Full-thali",
    textClass: "card_text5",
    text: " India flavors in one plate Roti, Sabji, Dahi, Salad, and more complete thali.",
  },
  {
    src: MakkaChapati,
    title: "Chapati special",
    textClass: "card_text3",
    text: "Taste tradition with 4 Makki di Roti and full plat Sarson da Saag- test of panjabi",
  },
];
const testimonialsData = [
  [
    { src: Anikesh, name: "Anikesh", position: "Owner" },
    {
      src: Aman,
      name: "Aman",
      position: "Owner",
    },
  ],
  [
    { src: Arpit, name: "Arpit", position: "Owner" },
    {
      src: Tarun,
      name: "Tarun",
      position: "Owner",
    },
  ],
];
export default function Home() {
  return (
    <div>
      {/* For Carousels */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel"
      data-bs-inteval="1000">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item1 carousel-item active ">
            <img src={Carousel1} className="d-block  h-50 w-100" alt="..." />
            <div className="caption1 h-50 w">
              <p>"Bringing the taste of home </p>
              <p> one tiffin at a time."</p>
              <button type="button" class="btn mx-4 px-4 btn-danger">
                Order Now
              </button>
            </div>
          </div>
          <div className=" carousel-item2 carousel-item">
            <img src={Carousel2} className="d-block  h-50 w-100" alt="..." />
            <div className="caption2 d-none d-md-block">
              <p>"Bringing the taste of home </p>
              <p> one tiffin at a time."</p>
              <button type="button" class="btn mx-4 px-4 btn-danger">
                Order Now
              </button>
            </div>
          </div>
          <div className="carousel-item carousel-item3 ">
            <img src={Carousel3} className="d-block  h-50 w-100" alt="..." />
            <div className="caption3 d-none d-md-block">
              <p>"Bringing the taste of home </p>
              <p> one tiffin at a time."</p>
              <button type="button" class="btn mx-4 px-4 btn-danger">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-flex justify-content-center my-sm-4">
        <h1 className="One-day-special">One day special</h1>
      </div>

      {/* For Cards */}
      <div className="container">
        <div className="row">
          {carddata.map((card) => {
            return (
              <div className="col-sm-4 col-lg-3 col-xs-6 pb-sm-3 py-3 py-sm-0">
                <div className="card box-shadow">
                  <img src={card.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className={card.textClass}>{card.text}</p>
                    <Link href="#" className="btn  btn-primary">
                      Add Card
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mt-lg-2">
        <div className="row">
          <img src={Helper_Template} alt="" />
        </div>
      </div>
      {/*For textimonials*/}
      <div className="container-lg mt-lg-2">
        <div className="row">
          <div className="col-sm-12">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="5000"

            >
              <h2>
                Collbrate<b></b> with Owner
              </h2>
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={1} />
              </ol>
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                {testimonialsData.map((data, index) => {
                  return (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="row">
                        {data.map((innerData, innerIndex) => {
                          return (
                            <div className="col-sm-6">
                              <div className="testimonial">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam eu sem tempor, varius
                                  quam at, luctus dui. Mauris magna metus,
                                  dapibus nec turpis vel, semper malesuada ante.
                                </p>
                              </div>
                              <div className="media">
                                <img src={innerData.src} className="mr-3" alt />
                                <div className="media-body">
                                  <div className="overview">
                                    <div className="name">
                                      <b>{innerData.name}</b>
                                    </div>
                                    <div className="details">
                                      {innerData.position}
                                    </div>
                                    <div className="star-rating">
                                      <ul className="list-inline">
                                        <li className="list-inline-item">
                                          <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                          <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                          <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                          <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                          <i className="fa fa-star-o" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
