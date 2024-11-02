import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const Cards = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDiscription] = useState("");
  const [data, setData] = useState("");
  const [display, setDisplay] = useState(true);

  async function fetcher() {
    await fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetcher();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {data &&
        data.map((data, item) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={item}>
              <img
                src={data.image}
                className="card-img-top"
                alt="No-Image"
                style={{
                  width: "250px",
                  height: "300px",
                }}
              />
              <h4 className="card-title">Price: ${data.price}</h4>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">
                  {data.description.substring(0, 100)}...
                </p>
                <button
                  onClick={() => {
                    // window.location.href = "/cart";
                    setDisplay(!display);
                    setImage(data.image);
                    setTitle(data.title);
                    setPrice(data.price);
                    setDiscription(data.description);
                  }}
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      {!display && (
        <Cart
          image={image}
          price={price}
          title={title}
          description={description}
        />
      )}
    </div>
  );
};

export default Cards;

// data= " sbjshdn" execute
// data= "" not-execute
