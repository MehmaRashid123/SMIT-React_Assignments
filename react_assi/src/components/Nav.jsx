import { FaGithub } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
const Nav = () => {
  return (
    <div className='bg-gray-900 flex wrap-anywhere justify-evenly w- h-20 items-center bg-fixed'>
        <div className="flex">
            <img src="react.svg" alt="react logo" className="animate-spin [animation-duration:3s]"/>
        <a class=" flex py-2 flex-column justify-center items-center text-gray-400 font-bold dark:text-gray-30 hover:active:text-cyan-700 hover:text-cyan-400 hover:underline text-sm ms-1 cursor-pointer" href="/versions">v19.2</a>
        </div>
      <div className="relative flex items-center z-10">
  
  <IoIosSearch className="absolute left-4 text-gray-400 text-lg" />

 
  <input
  type="search"
  placeholder="Search"
  className="
    bg-gray-700 text-white h-10 pl-12 pr-4 rounded-full outline-none placeholder-gray-400
    w-full        
    sm:w-64       
    md:w-80       
    lg:w-96       
    xl:w-[30rem] 
  "
/>


  
  <span className="absolute right-14 text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded-md">
    Ctrl
  </span>

 
  <span className="absolute right-6 text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded-md">
    K
  </span>
</div>


        
        <div className="space-x-7 font-medium text-gray-300">
        <a href="#">Learn</a>
        <a href="#">Reference</a>
        <a href="#">Community</a>
        <a href="#">Blog</a>
        </div>
        <div className="flex text-gray-300 space-x-7 text-2xl">
            <MdOutlineLightMode />
            <IoLanguage />
            <FaGithub />
        </div>
        
        </div>
  )
}

export default Nav

5