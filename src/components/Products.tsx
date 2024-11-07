import { BsEye } from "react-icons/bs"
import { products } from "../data/export"
import { BiHeartCircle } from "react-icons/bi"
import { CgShoppingCart } from "react-icons/cg"
const Products = () => {
  return (
    <div id="products" className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4">
      <h1 data-aos="zoom-in" data-aos-delay="100" className="text-accent font-semibold text-xl   text-center">Browse Collections</h1>
      <h1 data-aos-delay="200" className="text-black font-semibold text-[42px] leading-[50px] text-center">Trending Products</h1>
      <div   className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10">
     {
      products.map((product , index) => {
        return(
        <div id="product-box" key={(index)} className="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative group overflow-hidden">
            <img src={product.img} alt="" />
            <div id="icons" className="flex justify-center items-center gap-3 absolute top-[-40px] group-hover:translate-y-16 transition-all duration-300 ">
              <div className="bg-blue-400 hover:bg-accent rounded-full p-3 text-white">
                <BsEye />  
              </div>
              <div className="bg-blue-400 hover:bg-accent rounded-full p-3 text-white">
                <BiHeartCircle />
              </div>
              <div className="bg-blue-400 hover:bg-accent rounded-full p-3 text-white">
                <CgShoppingCart />
              </div>
            </div>
            <p className=" text-accent">{product.category}</p>
            <p className=" text-black font-bold ">{product.name}</p>
            <p className=" text-green-600 font-semibold">{product.price}</p>
        </div>
        )

      })
     }
      </div>
      <button className="bg-accent hover:bg-yellow-400 hover:shadow-md hover:text-black  text-white mt-[60px] px-9 py-3 rounded-lg font-semibold">Explore</button>

    </div>
  )
}

export default Products