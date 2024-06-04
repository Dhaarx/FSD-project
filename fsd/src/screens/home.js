import React from 'react';
import '../screens_css/home.css';
import a from '../images/car-1.jpeg';
import b from '../images/car-3.jpg';
import c from '../images/car-7.jpg';
import d from '../images/car-8.jpg';
import e from '../images/car-9.jpg';
import f from '../images/car-10.jpg';
import g from '../images/car-14.jpg';
import h from '../images/car-22.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Services from './Services';

const Home = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="full-width-carousel">
            <Slider {...settings}>
                <div className="full-width-slide">
                    <img src={e} alt="Slide 4" className="slide-image" />
                </div>
                <div className="full-width-slide">
                    <img src={f} alt="Slide 4" className="slide-image" />
                </div>
                <div className="full-width-slide">
                    <img src={g} alt="Slide 4" className="slide-image" />
                </div>
                <div className="full-width-slide">
                    <img src={h} alt="Slide 4" className="slide-image" />
                </div>
                <div className="full-width-slide">
                    <img src={a} alt="Slide 1" className="slide-image" />
                </div>
                <div className="full-width-slide">
                    <img src={b} alt="Slide 2" className="slide-image" />
                </div>
                <div className="full-width-slide">
                    <img src={c} alt="Slide 3" className="slide-image" />
                </div>
                <div className="full-width-slide">
                    <img src={d} alt="Slide 4" className="slide-image" />
                </div>
                
            </Slider>
            <div>
                <hr></hr>
            </div>
            <Services/>
        </div>
    );
};

export default Home;
