import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/Rescuer 1.jpg";
import ava02 from "../../assets/all-images/Rescuer 2.jpg";
import ava03 from "../../assets/all-images/Rescuer 3.jpg";
import ava04 from "../../assets/all-images/Rescuer 4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Великолепный сервис, приятный общительный персонал знающий своё дело. Буду пользоваться данными услугами в дальнейшем.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ruslan</h6>
            <p className="section__description">Покупатель</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Великолепный сервис, приятный общительный персонал знающий своё дело. Буду пользоваться данными услугами в дальнейшем.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ruslan Rescuer</h6>
            <p className="section__description">Покупатель</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Великолепный сервис, приятный общительный персонал знающий своё дело. Буду пользоваться данными услугами в дальнейшем.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Rescuer Ruslan</h6>
            <p className="section__description">Покупатель</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Великолепный сервис, приятный общительный персонал знающий своё дело. Буду пользоваться данными услугами в дальнейшем.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Rescuer</h6>
            <p className="section__description">Покупатель</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
