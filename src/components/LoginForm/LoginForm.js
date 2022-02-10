import React from 'react';
import { HiOutlineExclamationCircle } from "react-icons/hi";


const LoginForm = () => {
    return (
        <form>
            <div className="block mb-5">
                <label htmlFor="email" className="block">Email</label>
                <input id="email" name="email" type="email" autoComplete="false" className="mt-1 h-[3.125rem] w-full border border-black outline-none px-2" />
            </div>

            <div className="block mb-5">
                <label htmlFor="password" className="flex justify-between items-center"><span>Password </span> <span><HiOutlineExclamationCircle></HiOutlineExclamationCircle></span></label>
                <input id="password" name="password" type="password" className="mt-1 h-[3.125rem] w-full border border-black outline-none px-2" />
            </div>

            <button className="px-4  py-2 bg-indigo-700 text-white font-semibold rounded outline-none">Sign up</button>

            <div className="form-footer mt-6">
                <p className="text-sm">By signing up for Codecademy, you agree to Codecademy's <a href="#" className="text-violet-700">Terms of Service</a> &amp; <a href="#" className="text-violet-700">Privacy Policy</a>.</p>

                <p className="text-medium font-semibold mt-3">Or sign up using:</p>
            </div>

            <div className="">
                <button></button>
            </div>

        </form>

    )
}

export default LoginForm
