import React from 'react';
import { FaRegCircle,FaCircle } from "react-icons/fa";

const GoalInfoGrid = () => {
  return (
    <div className="border bg-white px-5 py-5">
      <h5 className="flex gap-2 mb-5"><mark className="bg-black text-white uppercase px-1 ">Pro</mark>
      Career Path</h5>
      <h1 className="mb-2">Computer Science</h1>
      <p className="flex align-items-center">
        <div className='flex align-items-center gap-2 text-xs'><FaRegCircle></FaRegCircle> <FaCircle></FaCircle></div>
        <span>Begginer frienfdly, <strong>82</strong> Lessons </span>
      </p>
      <legend className=" absolute bottom-0 right-0 px-2 py-1 bg-orange-200">Foundations</legend>
        
    </div>
  )
}

export default GoalInfoGrid