
// import { motion } from "framer-motion";
import { useState } from "react";
import { BiCart, BiLogoInstagram } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "#home", title: "Home" },
    { path: "#Shop", title: "Collections" },
    { path: "#designs", title: "" },
    { path: "#customers", title: "Customers" },
    { path: "#about", title: "About" },
    { path: "#contact", title: "Contact" },
  ];
  return (
      <div 
        className="flex items-center justify-between z-50 w-full md:px-[110px]   fixed bg-black backdrop-blur-lg bg-opacity-25 h-20"
        // initial={{ opacity: 1, y: -40 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.4 }}
      >
        <div className="text-black font-semibold text-[30px] mx-5">Sheket</div>
        <div className={`w-full absolute flex flex-col justify-center items-center md:flex md:flex-row md:items-center gap-2 md:gap-6 text-lg md:text-base py-6 md:relative md:top-0 bg-black md:bg-transparent md:backdrop-blur-none backdrop-blur-lg   bg-opacity-50 transition-all duration-300  ${isOpen ? 'top-[80px]' : '-top-60'}`} >
          {navItems.map((item) => (
            <a
              href={item.path}
              key={item.title}
              className="text-white no-underline md:text-black  font-bold hover:text-gray-300"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <BsPerson color="black"  size={30} />
          <BiCart color="black"   size={30}/>
          <BiLogoInstagram color="black" size={30} />
        </div>
        <div className="md:hidden pr-5">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {isOpen ? <CgClose size={30}/> : <MdMenu  size={30}/>}
                    </button>
        </div>
      </div>
   
  );
};

export default Header;