import React, { useState, useEffect } from "react";
import UnsplashImage from "./UnsplashImage";

import { Loader } from "./Loader";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function GridPhoto() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    // Unsplash Key
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    //Get image from Unaplash API and save them in images arry
    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImage([...images, ...res.data]);
      });
  };

  return (
    <>
      <section className=" page-section  portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Grid Photo
          </h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={true}
            loader={<Loader />}
            className="row"
          >
            {/* send Unsplash Images data to Unsplash component as props to show them in Grid */}
            {images.map((image) => (
              <UnsplashImage
                url={image.urls.small}
                key={image.id}
                title={image.alt_description}
                alt_description={image.alt_description}
              />
            ))}
          </InfiniteScroll>
        </div>
      </section>
    </>
  );
}

export default GridPhoto;
