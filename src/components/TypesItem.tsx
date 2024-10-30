 

const TypesItem = ({banner , name , per} : {banner :string , name:string , per:string} ) => {
  return (
    <div className=" flex flex-col  justify-center items-end gap-6 p-10 rounded-lg bg-cover bg-center  shadow-xl" style={{backgroundImage : `url(${banner})`}}>
    <p className=" border-2 border-accent text-accent text-lg px-6 py-2 rounded-lg">{per} off</p>
    <h1 className=" text-white text-4xl text-start  font-semibold">{name} <br />DEVICE</h1>
    <button className=" bg-accent px-6 py-3 rounded-lg text-black hover:shadow-md"> Shop Now</button>

  </div>
  )
}

export default TypesItem