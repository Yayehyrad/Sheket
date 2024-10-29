import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headset.jpg';
import earbud from '../assets/earbud.jpg';
import dslr from '../assets/dslr.jpg';

import Slider from "react-slick";

const Hero = () => {
    const settings  = {
        arrows : false,
        // autoplay: true,
        // draggeble : true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplaySpeed: 4000,
      };
  return (
    <div className=" w-full  justify-center items-center lg:h-[700px] h-[600px]">
        
    <Slider className=" bg-transparent w-full h-full" {...settings} >
        <div className=" relative">
        <div className=" w-[100%] lg:h-[700px] h-[600px] flex bg-cover bg-center flex-col" style={{backgroundImage : `url(${dslr})` ,  filter: 'hue-rotate(180deg)' }}>
            <div className=" w-1/2 h-full flex flex-col justify-center items-start gap-10 pl-28">
                <p className="  border-white border-2 p-3 rounded-lg text-5xl text-white">
                    Get a Discount upto 80%
                </p>
                <h1 className=" text-9xl mt-4 font-bold text-white uppercase">
                    DSLR 360  
                    <br />
                    Camera
                </h1>
                 
                <p className=" text-2xl">
                <span className=" text-red-400">100%  Trusted </span> electroncis gadgets
                </p>
                <div className=" w-full">
                    <button className=" bg-blue-200 px-5 py-2 rounded-full text-2xl">
                        Order now
                    </button>
                </div>
            </div>
            {/* <div className=" absolute w-full h-full bg-orange-400 opacity-5">

            </div> */}
        </div>
        </div>
    <div>Hero</div>

    </Slider>
   
    </div>
  )
}

export default Hero