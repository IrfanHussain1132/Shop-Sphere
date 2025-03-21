import React from 'react';
import './imagerol.css';
import wall1 from '../../src/Asset/wall1.jpg';
import itempro from './amazon.json';

const ImageRol = () => {
  return (
    <>
      <div className="homebanner">
        <img src={wall1} className="carousel-image" alt="Banner" />
        <div className="greydiv"></div>

        <div className="homeitemdiv">
          {itempro.product.map((item, ind) => (
            <div className="homeitemcard" key={ind}>
              <div className="cardtitle">{item.itemtitle}</div>
              <div className="imgdivcard">
                {item.imgs.map((it, imgIndex) => (
                  <div className="imghomediv" key={imgIndex}>
                    <img className="divimg" src={it.url} alt={it.name} />
                    <div className="imgname">{it.name}</div>
                  </div>
                ))}
              </div>
              <div className="seemore">See more</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageRol;
