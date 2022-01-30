import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import heroBanner from '../../assets/hero-img.jpeg';
import dotGrid from '../../assets/pp.png'
import { HiOutlineExclamationCircle } from "react-icons/hi";


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

                <div className="mt-40 sm:mt-10 w-[25rem]">
                    <h1 className="mb-5 text-2xl w-full font-semibold leading-10 font-['poppins']">Join the millions learning to code with Codecademy for free</h1>

                    <form>
                        <div className="block mb-5">
                            <label htmlFor="email" className="block">Email</label>
                            <input id="email" name="email" type="email" autoComplete="false" className="mt-1 h-14 w-full border border-black outline-none px-2" />
                        </div>

                        <div className="block mb-5">
                            <label htmlFor="password" className="flex justify-between items-center"><span>Password </span> <span><HiOutlineExclamationCircle></HiOutlineExclamationCircle></span></label>
                            <input id="password" name="password" type="password" className="mt-1 h-14 w-full border border-black outline-none px-2" />
                        </div>

                        <button className="px-4  py-2 bg-indigo-700 text-white font-semibold rounded outline-none">Sign up</button>

                        <div className="form-footer mt-6">
                            <p className="text-sm">By signing up for Codecademy, you agree to Codecademy's <a href="#" className="text-violet-700">Terms of Service</a> &amp; <a href="#" className="text-violet-700">Privacy Policy</a>.</p>

                            <p className="text-medium font-semibold mt-3">Or sign up using:</p>
                        </div>

                    </form>


                </div>

            </div>
        </div>
    )
}

export default Home
