import React, { useState } from "react";

const Cart = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "absolute",
          backgroundColor: "white",
          marginLeft: "1000px",
          height: "100%",
          width: "30%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>Cart</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div className="card" style={{ width: "18rem" }} >
            <img
              src={props.image}
              className="card-img-top"
              alt="No-Image"
              style={{
                width: "250px",
                height: "300px",
              }}
            />
            <h4 className="card-title">Price: ${props.price}</h4>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                {props.description}...
              </p>
            </div>
          </div>
        </div>
        <br />
        <button
        
          style={{
            height: "40px",
          }}
          className="btn btn-primary"
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
