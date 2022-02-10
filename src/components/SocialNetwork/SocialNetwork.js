import React from 'react';
import linkedin from "../../assets/linkedin.png"

const SocialNetwork = () => {
  return(
    <div className='flex gap-2'>  
      <button className="px-5 py-4 bg-white border border-black"><img className="h-5" src={linkedin} alt='Linkedin'/></button>
      <button className="px-5 py-4 bg-white border border-black"><img className="h-5" src={linkedin} alt='Linkedin'/></button>

      <button className="px-5 py-4 bg-white border border-black"><img className="h-5" src={linkedin} alt='Linkedin'/></button>

      <button className="px-5 py-4 bg-white border border-black"><img className="h-5" src={linkedin} alt='Linkedin'/></button>
    </div>
  );
};

export default SocialNetwork;
