import React from "react";
import ava01 from "../assets/images/ava-1.jpg";
import ava02 from "../assets/images/ava-2.jpg";
import ava03 from "../assets/images/ava-3.jpg";
import Slider from "react-slick";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          eligendi doloremque tempora natus. Maiores, aliquid aspernatur porro
          veritatis sint quae.
        </p>
        <div className="flex items-center">
          <img src={ava01} alt="" className="w-24 h-24 rounded-md" />
          <div>
            <h6>John doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          eligendi doloremque tempora natus. Maiores, aliquid aspernatur porro
          veritatis sint quae.
        </p>
        <div className="flex items-center">
          <img src={ava02} alt="" className="w-24 h-24 rounded-md" />
          <div>
            <h6>Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>{" "}
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          eligendi doloremque tempora natus. Maiores, aliquid aspernatur porro
          veritatis sint quae.
        </p>
        <div className="flex items-center">
          <img src={ava02} alt="" className="w-24 h-24 rounded-md" />
          <div>
            <h6>Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>{" "}
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          eligendi doloremque tempora natus. Maiores, aliquid aspernatur porro
          veritatis sint quae.
        </p>
        <div className="flex items-center">
          <img src={ava01} alt="" className="w-24 h-24 rounded-md" />
          <div>
            <h6>John doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          eligendi doloremque tempora natus. Maiores, aliquid aspernatur porro
          veritatis sint quae.
        </p>
        <div className="flex items-center">
          <img src={ava03} alt="" className="w-24 h-24 rounded-md" />
          <div>
            <h6>Tony stark </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
