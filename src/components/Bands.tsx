import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 
 
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";

const reviewdata = [
    {img : client1},
    {img : client2},
    {img : client3},
    {img : client4},
    {img : client5},
    {img : client6}

]

 
 




const Brands = () => {
  const settings = {
    dots: false,
    arrows : false,
    infinite: true,   
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=" w-full py-[80px]  flex flex-col justify-center items-center gap-4">
      <div className=" w-full mx-5">
        <Slider className=" w-full" {...settings} >

          {
            reviewdata.map((item)=>{
                return(
                  <div className="px-1">
                  <div className=" w-full flex flex-col items-center justify-center gap-4 p-3 lg:0-10 group group-hover:shadow-xl bg-gray-400 bg-opacity-50 backdrop-blur-lg">
                    <img src={item.img} alt="" className=" w-1/2 rounded-full  m-auto" />
                  </div>
                </div>
                )
            })
          }
       

        </Slider>

      </div>
    </div>
  )
}

export default Brands