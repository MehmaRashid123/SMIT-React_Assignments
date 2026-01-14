import { SiNike } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
const Cards = (a) => {
  return (
    
    <div className="card">
        <div className="ui">
            <div className="wrap">
            <span>{a.hr}</span>
            <CiBookmark />
            </div>
            <div className="wrap2">
            <h1>{a.title}</h1>
            <IoIosArrowRoundForward />
            </div>
            

        </div>
        <div className="l-cards">
            
            <img src={a.image} alt="" className="icon"/>
            <p>{a.title}</p>
            <button>{a.button||"View"}</button>

        </div>
    </div>
    
  )
}

export default Cards 