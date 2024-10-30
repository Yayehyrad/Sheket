import cat1 from "../assets/cat1.jpg"
import cat2 from "../assets/cat2.jpg"
import cat3 from "../assets/cat3.jpg"
import cat4 from "../assets/cat4.jpg"
import cat5 from "../assets/cat5.jpg"


import CategoryItem from "./CategoryItem"
const data = [
  {image : cat1 , 
   text : "Portable Speaker"
  },
  {image : cat2 , 
    text : "Portable Speaker"
   },
   {image : cat3 , 
    text : "Portable Speaker"
   },
   {image : cat4 , 
    text : "Portable Speaker"
   },
   {image : cat5 , 
    text : "Portable Speaker"
   },
      

]
const Category = () => {
  return (
    <div> 
        <div id="category" className="w-full lg:px-20 px-5 pt-[130px]    pb-[80px] bg-gray-100 flex lg:flex-row gap-20 flex-col items-center justify-self-center">
        <div   className="lg:w-[15%] w-full flex flex-col   lg:items-start justify-center items-center gap-[20px]">
          <h1 className="text-accent text-xl font-semibold text-center">Favorites</h1>
          <h1 className="text-black font-semibold text-[42px] leading-[59px] text-center lg:text-start">Popular Category</h1>
          <button className="bg-accent hover:bg-yellow-400 hover:shadow-md hover:text-black  text-white mt-[60px] px-3 py-3 rounded-lg font-semibold">VIEW ALL</button>
        </div>
        <div className="w-full lg:w-[85%] grid lg:grid-cols-5 grid-cols-1 gap-10 justify-center items-start">
        {
          data.map((item)=>{
            return <CategoryItem cat1={item.image} text={item.text} />
          })
        }

        </div>
  
        </div>
    </div>
  )
}

export default Category 