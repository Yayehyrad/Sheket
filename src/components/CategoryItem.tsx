 
const CategoryItem = ({cat1 , text} : {cat1 : string , text:string}) => {
  return (
  
          <div className="flex flex-col gap-[20px] justify-center items-center group ">
            <img src={cat1} alt="" className=" rounded-full  hover:shadow-lg cursor-pointer " />
            <h1 className=" text-black text-xl hover:text-accent cursor-pointer font-semibold">{text}</h1>
          </div>
    
  )
}

export default CategoryItem