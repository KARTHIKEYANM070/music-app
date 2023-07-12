import {React,useState} from "react";
import "../Styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import Profile from "../img/pexels-george-milton-6954216.jpg";
import DropDown from "./DropDown";
function RightMenu() {
  const[openProfile,setProfile]=useState(false);  
  return (
  
    <div className="rightContainer" onMouseLeave={()=> setProfile(false)}>
      <div className="profile">
        <div className="profileImage" >
        <div onClick={()=> setProfile(true)} >
          <img src={Profile}  alt="" />
        {
          openProfile && <DropDown/>
        }
        </div>
        
         
        </div>
        <i>
          <FaCrown />
          <p>
            <span> Go</span>Pro
          </p>
        </i>

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="goPro">
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>

      </div>
    </div>
  );
}

export { RightMenu };