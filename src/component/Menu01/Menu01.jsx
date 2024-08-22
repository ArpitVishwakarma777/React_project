import React from "react";
import "./Menu01.css";
import storeContext from "../StoreContext/StoreContext";
const Menu = () => {
  const { thali } = storeContext;

  return (
    <>
      {/* This is for Menu Header */}

      <div className="container-fluid bg-dark mw-100 gap-5">
        <div className="row hie">
          <div className="col-lg-12">
            <h1 className="bgUrl1 h-100 bg-white text-center fs-1 pt-5">
              Tiffin Services
              <div className="fst-normal h6">
                <strong>Home-</strong> Tiffin Services
              </div>
            </h1>
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center align-items-center">
            <h1 className="text-lg-center mt-5 fst-italic fs-xl fw-bolder border-bottom border-dark border-5 w1 position-relative">
              Full Thali System
            </h1>
          </div>
        </div>
      </div>

      {/* for Item in Cart */}
      {thali
        .reduce((acc, item, index) => {
          // Add a new group every three items
          if (index % 3 === 0) acc.push([]);
          acc[acc.length - 1].push(item);
          return acc;
        }, [])
        .map((item, iIndex) => (
          <div className="container-fluid" key={iIndex}>
            <div className="row d-flex justify-content-center">
              {item.map((item, index) => (
                <div className="col-md-3 gap-5 shadow" key={index}>
                  <div className="card-body imageGrow cart-item p-1">
                    <img
                      src={item}
                      alt="Five Dishes Thali"
                      className={`card-img-top aspect-ratio-box ${
                        index === 0 ? "imgHW" : "dropshadow"
                      }`}
                    />
                    <div className="card-body cart-item-details">
                      <div className="d-flex justify-content-evenly">
                        <h4 className="card-title fw-bold myFont">
                          Five Dishes Thali
                        </h4>
                        <p className="text-success cart-item-details">
                          <strong className="price DecMergin">Price:</strong>{" "}
                          <span className="DecMergin">₹150</span>
                        </p>
                      </div>
                      <p className="card-text cart-item-details">
                        This is a very delicious Thali with Dal + Chawal+
                        Paratha+ 2 Sabji+ Salad and AamPak.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="rating cart-item-details">
                          <i className="fa-solid fa-star text-warning"></i> 4.5
                        </div>
                        <button className="btn btn-success btn-myHover imageGrow dropshadow">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default Menu;
