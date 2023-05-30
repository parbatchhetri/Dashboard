import React from 'react'
import "./Right.css"
import{AiOutlineSearch, AiOutlineCloseCircle, AiOutlineCompress, AiOutlineBars, AiOutlineSetting} from "react-icons/ai"
import{BsGlobe, BsMoon} from "react-icons/bs"
import{IoIosNotificationsOutline} from "react-icons/io"
import{MdOutlineMessage} from "react-icons/md"
import{FaUserCircle} from"react-icons/fa"

const Right = () => {
  return (
    <div className='maindiv'>
      
      <div className='firstdiv'>
        <AiOutlineSearch className='iconsearch'/>
        <h1 className='search'> Search...</h1>
        <AiOutlineCloseCircle className='close'/>
      </div>

      <div className='seconddiv'>
        <div className='abc'>
        <BsGlobe className='globe'/>
        <h1 className='english'>English</h1>
        </div>
        <BsMoon className='moon'/>
        <AiOutlineCompress className='press'/>
        <div className='noti'>
        <IoIosNotificationsOutline className='notification'/>
        <span className='one'>1</span>
        </div>
        <div className='noti'>
        <MdOutlineMessage className='message'/>
        <span className='one'>2</span>
        </div>
        <AiOutlineBars className='bar'/>
        <FaUserCircle className='user'/>
        <AiOutlineSetting className='setting'/>
      </div>
      

   </div>
    
  )
}

export default Right