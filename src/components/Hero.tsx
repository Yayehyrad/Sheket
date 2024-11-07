import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headset.jpg';
import earbud from '../assets/earbuds.jpg';
import dslr from '../assets/dslr.jpg';

import Slider from "react-slick";

const data = [{
    img : dslr ,
    name : "Dlsr 360",
    type : "Camera"
} , 
{
    img : earbud ,
    name : "Dlsr 360",
    type : "Camera"
}, 
{
    img : headset ,
    name : "Dlsr 360",
    type : "Camera"
}]


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
    <div className=" w-full  justify-center items-center h-[100vh]  ">
        
    <Slider className=" bg-transparent w-full h-full" {...settings} >
        {
            data.map((item )=>{
                return(
                    <div className=" relative">
                    <div className=" w-[100%] h-screen flex bg-cover bg-center flex-col" style={{backgroundImage : `url(${item.img})` ,  filter: 'hue-rotate(180deg)' }}>
                        <div className=" w-full md:w-1/2  h-full flex flex-col justify-center items-start gap-10 pl-28">
                            <p className="  border-white border-2 p-3 rounded-lg text-3xl md:text-5xl text-white">
                                Get a Discount upto 80%
                            </p>
                            <h1 className=" text-4xl sm:text-6x md:text-9xl mt-4 font-bold text-white uppercase">
                                {item.name} 
                                <br />
                                {item.type}
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
                
                )
            })
        }

       

    </Slider>
   
    </div>
  )
}

export default Hero