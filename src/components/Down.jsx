import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Down.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RiArrowUpSLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Down = () => {
  return (
    <div className="bigbig">
      <div className="sanobox">
        <div className="sabaidiv">
          <p className="total"> Total Revenue</p>
          <BsThreeDotsVertical className="thoplo" />
        </div>
        <div className="dharko2">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="quote">Total sales made today</p>
        <p className="maal2">$420</p>
        <p className="essay">
          Previous transactions processing. Last payments may not be included.{" "}
        </p>
        <div className="talamaal">
          <div className="lastpart">
            <h1 className="target">Target</h1>
            <h1 className="target"> Last week</h1>
            <h1 className="target">Last month </h1>
          </div>

          <div className="love">
            <div className="vale1">
              <BiChevronDown className="down"></BiChevronDown>
              <p className="bhaag1">$12.4k</p>
            </div>
            <div className="vale2">
              <RiArrowUpSLine className="down"></RiArrowUpSLine>
              <p className="bhaag2">$12.4k</p>
            </div>
            <div className="vale3">
              <BiChevronDown className="down"></BiChevronDown>
              <p className="bhaag3">$12.4k</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[800px] shadow-xl aa7">
        <h1 className=" text-[#888] font-semibold ml-2 mt-2  bb9">
          Last 6 Months (income)
        </h1>

        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />

            <CartesianGrid className=" stroke-white " strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Down;
