import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import TypesItem from "./TypesItem";

const data = [
  {image : banner1 , 
   text : "WIRELESS",
   per : "60%"
  },
  {image : banner2 , 
    text : "PORTABLE",
    per : "20%"
   },
   {image : banner3 , 
    text : "SMART",
    per : "40%"
   },]

const Type = () => {
  return (
    <div className="w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10">
        {data.map((dataitem)=>{
          return <TypesItem banner={dataitem.image} name={dataitem.text} per={dataitem.per}/> 
        })}
    </div>
  )
}

export default Type