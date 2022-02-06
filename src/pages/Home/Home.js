import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import heroBanner from '../../assets/hero-img.jpeg';
import dotGrid from '../../assets/pp.png'
import { HiOutlineExclamationCircle } from "react-icons/hi";
import LoginForm from '../../components/LoginForm/LoginForm';
import SocialNetwork from '../../components/SocialNetwork/SocialNetwork';


const Home = () => {
    
    return (
        <div>
            <Navigation></Navigation>

            <div className="grid sm:grid-cols-2 px-4 mx-auto gap-40 justify-evenly sm:px-6 lg:px-8 ">

                <div className="mt-20 lg:w-[33rem] w-72 sm:w-96">
                    <div className="relative animate-bounce">
                        <img src={dotGrid} className="mt-5 absolute border-blue-900 border-8 bg-cover"></img>
                        <img src={heroBanner} className="absolute ml-5 border border-black"></img>
                    </div>
                </div>

                <div className="mt-40 sm:mt-10 w-full sm:w-[25rem] ">
                    <h1 className="mb-5 text-2xl w-full font-semibold leading-10 font-['poppins']">Join the millions learning to code with Codecademy for free</h1>

                    <LoginForm></LoginForm>

                    <SocialNetwork></SocialNetwork>

                </div>

            </div>
        </div>
    )
}

export default Home
