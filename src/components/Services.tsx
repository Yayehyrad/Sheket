import shipping from "../assets/shipping.png";
import payment from "../assets/payment.png";
import refund from "../assets/return.png";
import gift from "../assets/gift.png";

const Services = () => {
  return (
    <div className="w-full lg:px-20 px-5 pt-5 pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center gap-2">
      <img src={shipping} alt="" className="mb-[20px] w-[60px]" />
      <h1 className="text-xl font-semibold">Worldwide Shipping</h1>
      <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperna</p>
      </div>
      {/* payment */}
      <div className="flex flex-col justify-center items-center gap-2">
      <img src={payment} alt="" className="mb-[20px] w-[60px]" />
      <h1 className="text-xl font-semibold">Different Payment</h1>
      <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperna</p>
      </div>
      {/*return*/}
      <div className="flex flex-col justify-center items-center gap-2">
      <img src={refund} alt="" className="mb-[20px] w-[60px]" />
      <h1 className="text-xl font-semibold">Refund</h1>
      <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperna</p>
      </div>
      {/*gift*/}
      <div className="flex flex-col justify-center items-center gap-2">
      <img src={gift} alt="" className="mb-[20px] w-[60px]" />
      <h1 className="text-xl font-semibold">Different Gifts</h1>
      <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperna</p>
      </div>
    </div>
  )
}

export default Services