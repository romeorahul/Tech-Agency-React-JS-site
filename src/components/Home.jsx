import React from "react";
import robot from "../assets/robot.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>ROMEO SITE 1</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={robot} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            possimus eaque necessitatibus hic iste saepe, tempora earum aperiam
            repudiandae labore?
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who We Are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nulla
            odit numquam corrupti excepturi vitae cumque rem odio consectetur,
            atque consequuntur, aut mollitia laudantium dolorum ducimus.
            Accusantium cupiditate nemo hic nam vel, error inventore fugiat iure
            nulla, natus rerum quasi dicta sunt accusamus velit dolore eligendi
            voluptatum ex. Laboriosam nisi magnam, molestiae inventore quis
            veniam explicabo ipsa consequatur eligendi dignissimos.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Our Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillFacebook />
              <p>Facebook</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

// 1:55:12
