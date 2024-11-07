import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { reviewdata } from "../data/export";
import { FaStar } from "react-icons/fa6";
 
 




const Reviews = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
    <div className=" w-full px-5 lg:px-20 py-[80px] bg-gray-300 flex flex-col justify-center items-center gap-4">

    <p className=" text-accent text-xl font-semibold "> 1300+ satisfied clients </p>
    <p className=" text-black text-5xl font-bold"> Our Customers </p>
      <div className=" w-full mt-10">
        <Slider className=" w-full" {...settings} >

          {
            reviewdata.map((item )=>{
                return(
                  <div className="px-1">
                  <div className=" w-full flex flex-col items-center justify-center gap-4 p-3 lg:0-10 group group-hover:shadow-xl bg-white bg-opacity-50 backdrop-blur-lg">
                    <img src={item.img} alt="" className=" w-1/2 rounded-full  m-auto" />
                    <p className=" text-black capitalize font-bold">{item.name}</p>
                    <div className=" flex">
                      {Array.from({ length: 5 }).map(() => {
                              return <FaStar />
                        })
                        }
                        </div>
                        <p className="text-gray-600">
                          {item.para}
                        </p>
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

export default Reviews