import insta1 from "../assets/insta-1.jpg";
import insta2 from "../assets/insta-2.jpg";
import insta3 from "../assets/insta-3.jpg";
import insta4 from "../assets/insta-4.jpg";
import insta5 from "../assets/insta-5.jpg";

const Insta = () => {
  return (
    <div className=" w-full px-5 lg:px-20 py-[80px] flex flex-col items-center justify-center gap-4 bg-white">
      <p className=" text-accent text-xl font-semibold capitalize">
        Latest
      </p>
      <p className=" text-black text-4xl font-semibold items-center capitalize ">
        Products
      </p>
      <div className=" w-full grid items-center justify-center gap-6 mt-8 grid-cols-1 lg:grid-cols-5 md:grid-cols-3">
        <img src={insta1} alt=""  className=" rounded-xl"/>
        <img src={insta2} alt="" className=" rounded-xl"/>
        <img src={insta3} alt="" className=" rounded-xl"/>
        <img src={insta4} alt="" className=" rounded-xl"/>
        <img src={insta5} alt="" className=" rounded-xl"/>
      </div>
      <button className="bg-accent hover:bg-yellow-400 hover:shadow-md hover:text-black  text-white mt-[60px] px-6 py-3 rounded-lg font-semibold">Explore</button>
    </div>
  )
}

export default Insta