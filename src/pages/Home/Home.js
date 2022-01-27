import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import heroBanner from '../../assets/hero-img.jpeg';
import dotGrid from '../../assets/pp.png'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
          
        <div className="mx-auto flex justify-between px-4 sm:px-6 lg:px-8">
            <div className="relative mt-20 lg:w-[33rem] w-96">
                <img src={dotGrid} className="mt-5 absolute border-8 bg-cover"></img>
                <img src={heroBanner} className="absolute border-slate-800  border ml-5"></img>
                
                
            </div>
            <div className="">
                fsfsdfs
            </div>

        </div>


        </div>
    )
}

export default Home
