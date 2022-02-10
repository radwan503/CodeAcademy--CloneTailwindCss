import React from 'react';

const GoalAsk = ({title,subtitle}) => {
  return(
    <div className="d-flex flex-column">
        <div className="d-flex flex-column px-0 py-7 border-b border-b-black hover:bg-white hover:px-3 hover:py-6 transition duration-700 ease-out hover:ease-in">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-medium">{subtitle}</p>
        </div>
    </div>
    
  );
};

export default GoalAsk;
