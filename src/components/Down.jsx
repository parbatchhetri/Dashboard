import React from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"
import "./Down.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import { RiArrowUpSLine ,} from "react-icons/ri";
// import {BiChevronDown} from "react-icons/bi"

const Down = () => {
  return (
    
    <div className="sanobox">
    <div className="sabaidiv">
    <p className="total"> Total Revenue</p>
    <BsThreeDotsVertical className="thoplo"/>
   
  </div>
  <div className='dharko2'>
    <CircularProgressbar value={70}
            text={"70%"}
            strokeWidth={5}/>
    </div>
    <p className='quote'>Total sales made today</p>
    <p className='maal2'>$420</p>
    <p className='essay'>Previous transactions processing. Last payments may not be included. </p>
    <div className='talamaal'>
        <div className='lastpart'>
            <h1 className='target'>Target</h1>
            <h1 className='target'> Last week</h1>
            <h1 className='target'>Last month </h1>
          
        </div>

    </div>
  </div>
  
  )
}

export default Down
