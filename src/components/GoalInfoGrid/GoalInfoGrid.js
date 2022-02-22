import React from 'react';
import { FaRegCircle,FaCircle } from "react-icons/fa";

const GoalInfoGrid = ({courseType,title,message,lessonCount,status}) => {
  return (
    <div className="relative border bg-white px-5 py-5">
      <h5 className="flex gap-2 mb-2">
        <mark className="bg-black text-white uppercase px-1 text-[12px] leading-[22px]">{courseType}</mark>
        <text className=" tracking-widest capitalize">Career Path</text>
        </h5>
      <h1 className="mb-2 font-bold text-[20px] capitalize">{title}</h1>
      <p className="flex content-center justify-start items-center gap-2 pb-14">
        <span className='flex content-center gap-1 text-xs'>
          <FaRegCircle size={8}></FaRegCircle> 
          <FaCircle size={8}></FaCircle>
        </span>
        <span className='text-[14px] capitalize'>{message}, <strong>{lessonCount}</strong> Lessons </span>
      </p>
      <div className="absolute bottom-0 right-0 px-2 py-1 bg-orange-200 capitalize font-bold">{status}</div>
        
    </div>
  )
}

export default GoalInfoGrid