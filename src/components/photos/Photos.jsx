import React, { useState } from "react";
import "./photos.scss";

function Photos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      img: "./assets/image-carousel/best-view.jpg",
      title: "Upper Pisang to Manang viewpoint",
      country: "Nepal",
    },
    {
      id: "2",
      img: "./assets/image-carousel/desert.jpg",
      title: "Sahara Desert",
      country: "Morocco",
    },
    {
      id: "3",
      img: "./assets/image-carousel/pink-beach.jpg",
      title: "Pink Beach",
      country: "Indonesia",
    },
    {
      id: "4",
      img: "./assets/image-carousel/moss.jpg",
      title: "Peak District",
      country: "UK",
      
    },
    {
      id: "5",
      img: "./assets/image-carousel/padar-island.jpg",
      title: "Padar Island Viewpoint",
      country: "Indonesia",
      
    },
    {
      id: "6",
      img: "./assets/image-carousel/chefchaoen.jpg",
      title: "Chefchaoen",
      country: "Morocco",
      
    },
    {
      id: "7",
      img: "./assets/image-carousel/ranthambore.jpg",
      title: "Ranthambore National Park",
      country: "India",
    },
    {
      id: "8",
      img: "./assets/image-carousel/sri-lanka-beach.jpg",
      title: "Yala National Park",
      country: "Sri Lanka",
    },
    {
      id: "9",
      img: "./assets/image-carousel/tiger2.jpg",
      title: "Tigers",
      country: "India",
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="photos" id="photos">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <img src={d.img} className="item" alt="" />
              <div className="text-container">
                <h2 className="photo-heading">{d.title}</h2>
                <p className="photo-country"><i class="fa-solid fa-location-dot"></i>{d.country}</p>
                <p className="photo-description">{d.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
      <a className="arrow-down" href="#contact">
        <img src="assets/down.png" alt="arrow" />
      </a>
    </div>
  );
}

export default Photos;
