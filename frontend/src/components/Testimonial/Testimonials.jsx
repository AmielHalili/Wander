import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slideToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    }
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>I absolutely love using Wander! I visited Tokyo in Japan a few months ago using one of Wander's itineraries and it was the experience of a lifetime! I will definitely be using Wander again for my next trip to France! </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">John King</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Thanks to Wander, my guided trip to Indonesia felt like such an adventure! It showed me to the most breathtaking views and gave me an experience I will never forget.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Lia Jolie</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Wander was such a useful tool. I was feeling very spontaneous one day and wanted to go on a trip. Wander had so many options to choose from and I ended up choosing to go to Indonesia which was amazing.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Brad Pitt</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials