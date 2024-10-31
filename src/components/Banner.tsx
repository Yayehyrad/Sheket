import deal from "../assets/deal-bg.jpg"; 

const Banner = () => {
  return (
    <div className=" w-full px-5 lg:px-20 py-[80px]">
      <div className=" w-full h-[300px] rounded-lg bg-cover bg-right flex flex-col justify-center items-center gap-3 md:bg-center" style={{backgroundImage:`url(${deal})`}}> 
          <p className=" font-semibold text-xl text-accent">Exclusive Collection</p>
          <p className=" font-semibold text-4xl text-white uppercase">Deal of the day</p>
      </div>

    </div>
  )
}

export default Banner