import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import heroBanner from '../../assets/hero-img.jpeg';
import dotGrid from '../../assets/pp.png'
import { HiOutlineExclamationCircle } from "react-icons/hi";
import LoginForm from '../../components/LoginForm/LoginForm';
import SocialNetwork from '../../components/SocialNetwork/SocialNetwork';
import GoalAsk from '../../components/GoalAsk/GoalAsk';
import GoalInfoGrid from '../../components/GoalInfoGrid/GoalInfoGrid';


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
                    <h1 className="mb-3 text-2xl w-full font-semibold leading-10 font-['poppins']">Join the millions learning to code with Codecademy for free</h1>

                    <LoginForm></LoginForm>

                    <SocialNetwork></SocialNetwork>

                </div>

            </div>

            <div className="flex flex-col sm:flex-row px-4 mx-auto gap-10 sm:px-6 lg:px-8 pt-28">
                <div className="w-[31.563rem]">
                   <h1 className="text-5xl font-bold mb-10">Whats your goal?</h1>
                   <div className="d-flex">
                       <GoalAsk title="Build a career" subtitle="Career Paths are our most complete offering, with everything you need to land the job."></GoalAsk>
                       <GoalAsk title="Gain a skill"></GoalAsk>
                       <GoalAsk title="Learn a language"></GoalAsk>
                       <GoalAsk title="Explore a subject"></GoalAsk>
                   </div>
                </div>
                <div className="w-[31.563rem] relative">
                <svg fill="currentColor" role="img" aria-hidden="true" class="absolute h-full w-full top-0 right-0 bottom-0 left-0"><title>Dot Loose</title><pattern id="DotLoose-pattern-3" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="0.5" height="0.5" fill="currentColor"></rect><rect y="1" width="0.5" height="0.5" fill="currentColor"></rect><rect y="0.5" width="0.5" height="0.5" fill="currentColor"></rect><rect x="1" width="0.5" height="0.5" fill="currentColor"></rect><rect x="1" y="1" width="0.5" height="0.5" fill="currentColor"></rect><rect x="1" y="0.5" width="0.5" height="0.5" fill="currentColor"></rect><rect x="0.5" width="0.5" height="0.5" fill="currentColor"></rect><rect x="0.5" y="1" width="0.5" height="0.5" fill="currentColor"></rect><rect x="0.5" y="0.5" width="0.5" height="0.5" fill="currentColor"></rect></pattern><rect width="100%" height="100%" fill="url(#DotLoose-pattern-3)"></rect></svg>

                <div className="relative">
                    <GoalInfoGrid></GoalInfoGrid>
                </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Home
