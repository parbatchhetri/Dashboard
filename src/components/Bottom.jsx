import React from "react";
import "./Bottom.css";
import { RiArrowUpSLine ,} from "react-icons/ri";
import{ HiOutlineUser} from "react-icons/hi"
import { MdAccountBalanceWallet,MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineDollarCircle,} from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi"

const Bottom = () => {
  return (
    <div className="mainbox">
      
       <div className="box1">
        <div className="box2">
        <div className="group">
          <span className="users">USERS</span>
          </div>
          <div className="num">
          <RiArrowUpSLine className="up" />
          <span className="five"> +5 %</span>
          </div>
          </div>
        
        <h1 className="ttss">720</h1>
        <div className="group2">
          <div className="see">See all users</div>
           <HiOutlineUser className="icons acolor"/>
          
        </div>
      </div>

      <div className="box1">
        <div className="box2">
        <div className="group">
          <span className="users">USERS</span>
          </div>
          <div className="num">
          <BiChevronDown className="up" />
          <span className="five"> +2 %</span>
          </div>
          </div>
        
        <h1 className="ttss">260</h1>
        <div className="group2">
          <div className="see">View all orders</div>
           <MdOutlineShoppingCart className="icons bcolor"/>
          
        </div>
      </div>

      <div className="box1">
        <div className="box2">
        <div className="group">
          <span className="users">USERS</span>
          </div>
          <div className="num">
          <RiArrowUpSLine className="up" />
          <span className="five"> +12 %</span>
          </div>
          </div>
        
        <h1 className="ttss">$4.6k</h1>
        <div className="group2">
          <div className="see">View net earnings</div>
           <AiOutlineDollarCircle className="icons ccolor "/>
          
        </div>
      </div>

      <div className="box1">
        <div className="box2">
        <div className="group">
          <span className="users">USERS</span>
          </div>
          <div className="num">
          <RiArrowUpSLine className="up" />
          <span className="five"> +5 %</span>
          </div>
          </div>
        
        <h1 className="ttss">$7.8k</h1>
        <div className="group2">
          <div className="see">See details</div>
           <MdAccountBalanceWallet className="icons dcolor"/>
          
        </div>
      </div>
     

    </div>
    
  );
};

export default Bottom;
