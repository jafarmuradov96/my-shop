import React from 'react'
import Slider from 'react-slick';
import sliderImg1 from '../../img/img2.webp'
import sliderImg2 from '../../img/img3.webp'
import sliderImg3 from '../../img/img4.webp'
import sliderImg4 from '../../img/img5.jpg'

const SliderSite = () => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1
        };
  return (
    <div>
        <Slider {...settings}>
          <div>
            <img className='w-full h-96 object-contain' src={sliderImg1} alt="" />
          </div>
          <div>
            <img className='w-full h-96 object-contain' src={sliderImg2} alt="" />
          </div>
          <div>
            <img className='w-full h-96 object-contain' src={sliderImg3} alt="" />
          </div>
          <div>
            <img className='w-full h-96 object-contain' src={sliderImg4} alt="" />
          </div>

        </Slider>
        </div>
  )
}

export default SliderSite