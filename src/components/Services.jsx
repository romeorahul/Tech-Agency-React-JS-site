import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="item1" />
          <p className="legend">Graphic Design</p>
        </div>
        <div>
          <img src={img2} alt="item2" />
          <p className="legend">Website Development</p>
        </div>
        <div>
          <img src={img3} alt="item3" />
          <p className="legend">UI/UX Design</p>
        </div>
        <div>
          <img src={img4} alt="item4" />
          <p className="legend">Android Development</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
