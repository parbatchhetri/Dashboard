import React from "react";
import "./Side.css";
import { MdDashboard } from "react-icons/md";
import { BsPerson, BsCreditCard2Back } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { ImStatsDots } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdHealthAndSafety } from "react-icons/md";
import { SiLogstash } from "react-icons/si";
const Side = () => {
  return (
    <div className="sidediv">
      <div className="sidebox">
        <div className="admin">Parvat Admin</div>
        <div className="line">
          <div className="main">MAIN</div>
          <div className="dashicon dash1">
            <MdDashboard className="icon"></MdDashboard>
            <span className="dash">Dashboard</span>
          </div>
          
          <div className="main">LISTS</div>

          <div className="dashicon ">
            <BsPerson className="icon"/>
            <div className="user">Users</div>
          </div>
          <div className="dashicon">
            < SiHomeassistantcommunitystore className="icon"/>
            <div className="user">Products</div>
          </div>
          <div className="dashicon">
            < BsCreditCard2Back className="icon"/>
            <div className="user">Orders</div>
          </div>
          <div className="dashicon dash1">
            <TbTruckDelivery className="icon"/>
            <div className="user">Delivery</div>
            
          </div>
          <div className="main"> USEFUL</div>
          <div className="dashicon">
            <ImStatsDots className="icon"/>
            <div className="user">Stats</div>
          </div>
          <div className="dashicon dash1">
            <IoIosNotificationsOutline className="icon"/>
            <div className="user">Notifications</div>
          </div>
          <div className="main">SERVICE</div>
          <div className="dashicon">
            <MdHealthAndSafety className="icon"/>
            <div className="user">System Health</div>
          </div>
          <div className="dashicon">
            <SiLogstash className="icon"/>
            <div className="user">Logs</div>
          </div>
          <div className="dashicon dash1">
            <AiFillSetting className="icon"/>
            <div className="user">Settings</div>
          </div>
          <div className="main"> USERS</div>
          <div className="dashicon">
            <CgProfile className="icon"/>
            <div className="user">Profile</div>
          </div>
          <div className="dashicon dash1">
            <TbLogout className="icon"/>
            <div className="user">Logout</div>
          </div>
          <div className="main">THEME</div>
          <div className="box">
            <div className="boxicon"></div>
            <div className="boxicon1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
