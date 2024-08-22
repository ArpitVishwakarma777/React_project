import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/js/bootstrap.bundle";
import storeContext from "../StoreContext/StoreContext";

export default function Home() {
  const { Carousel, Card, CardTitle, CardText, owners } =
    useContext(storeContext);
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
            {Carousel.map((item, index) => {
              <div key={index}>
                <img src={item} className="d-block  h-50 w-100" alt="..." />;
                <div className="caption1 h-50 w">
                  <p>Bringing the taste of home </p>
                  <p> one tiffin at a time</p>
                  <button type="button" className="btn mx-4 px-4 btn-danger">
                    Order Now
                  </button>
                </div>
              </div>;
            })}
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
          <div className="col1 col-sm-4 col-lg-3 col-xs-6 pb-sm-3 py-3 py-sm-0">
            <div className="card box-shadow">
              {Card.map((item, index) => {
                <div key={index}>
                  <img
                    src={Card[index]}
                    className="d-block  h-50 w-100"
                    alt="..."
                  />
                  ;
                  <div className="card-body">
                    <h5 className="card-title">{CardTitle[index]}</h5>
                    <p className="card-text1">{CardText[index]}</p>
                    <Link href="#" className="btn  btn-primary">
                      Add Card
                    </Link>
                  </div>
                  ;
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-lg-2">
        <div className="row">
          <img src={storeContext.Helper_Template} alt="" />
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
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam eu sem tempor, varius quam at, luctus dui.
                          Mauris magna metus, dapibus nec turpis vel, semper
                          malesuada ante.
                        </p>
                      </div>
                      <div className="media">
                        {owners.map((item, intex) => {
                          <img
                            src={item.owners[intex]}
                            className="d-block  h-50 w-100"
                            alt="..."
                          />;
                        })}

                        <img src={storeContext.Anikesh} className="mr-3" alt />
                        <div className="media-body">
                          <div className="overview">
                            <div className="name">
                              <b>Mr.Anikesh</b>
                            </div>
                            <div className="details">Founder</div>
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
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>
                          Vestibulum quis quam ut magna consequat faucibu. Eget
                          mi suscipit tincidunt. Utmtc tempus dictum.
                          Pellentesque virra. Quis quam ut magna consequat
                          faucibus quam.
                        </p>
                      </div>
                      <div className="media">
                        <img src={storeContext.Aman} className="mr-3" alt />
                        <div className="media-body">
                          <div className="overview">
                            <div className="name">
                              <b>Mr. Aman</b>
                            </div>
                            <div className="details">Partner of Owner</div>
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
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam eu sem tempor, varius quam at, luctus dui.
                          Mauris magna metus, dapibus nec turpis vel, semper
                          malesuada ante.
                        </p>
                      </div>
                      <div className="media">
                        <img src={storeContext.Arpit} className="mr-3" alt />
                        <div className="media-body">
                          <div className="overview">
                            <div className="name">
                              <b>Mr. Arpit</b>
                            </div>
                            <div className="details">Kichen seff</div>
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
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>
                          Vestibulum quis quam ut magna consequat faucibu. Eget
                          mi suscipit tincidunt. Utmtc tempus dictum.
                          Pellentesque virra. Quis quam ut magna consequat
                          faucibus quam.
                        </p>
                      </div>
                      <div className="media">
                        <img src={storeContext.Tarun} className="mr-3" alt />
                        <div className="media-body">
                          <div className="overview">
                            <div className="name">
                              <b> Mr. Tarun</b>
                            </div>
                            <div className="details">Kichen seff</div>
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
                  </div>
                </div>
                {/* Carousel controls */}
                <Link
                  className="carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <i className="fa fa-chevron-left" />
                </Link>
                <Link
                  className="carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <i className="fa fa-chevron-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
