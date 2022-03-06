import React, { Fragment, useState } from 'react';
import { Disclosure, Popover, Transition, Manu, Menu } from '@headlessui/react';
import { IoSearchOutline } from "react-icons/io5";
import { AiFillCaretDown } from 'react-icons/ai'
import { HiMenuAlt2, HiX, HiOutlineChevronRight, HiViewGridAdd, HiOutlineCurrencyDollar, HiOutlineChevronLeft } from "react-icons/hi";
import { FaBackward, FaRegAddressBook } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navigation = () => {
    const [mobileMenuShow, setMobileMenuShow] = useState(false);
    const [resourcesSubMenuShow, setResourcesSubMenuShow] = useState(false)
    const [communitySubMenuShow, setCommunitySubMenuShow] = useState(false)


    const menuShowBtn = () => {
        setMobileMenuShow(true)
    }
    const menuHideBtn = () => {
        setMobileMenuShow(false)
        setResourcesSubMenuShow(false)
        setCommunitySubMenuShow(false)
    }

    const resourcesMobileSubMenuOpen = () => {
        setResourcesSubMenuShow(true)

    }

    const resourcesMobileSubMenuClose = () => {
        setResourcesSubMenuShow(false)
    }

    const communityMobileSubMenuOpen = () => {
        setCommunitySubMenuShow(true)

    }

    const communityMobileSubMenuClose = () => {
        setCommunitySubMenuShow(false)
    }




    return (
        <header>
            <div className="min-h-full">
                {/* large screen navbar */}
                <Menu as="nav" className="bg-transparent">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16 items-center">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="code academy logo"></img>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex gap-5">
                                        <a hre="#" className="text-black font-['system-ui'] text-base">CataLog</a>
                                        <Popover className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button
                                                        className={`
                                                ${open ? 'font-bold ' : 'text-opacity-90'}
                                                text-black font-['system-ui'] inline-flex items-center text-base hover:text-opacity-100 hover:text-violet-700`}>
                                                        <span>Resources</span>
                                                        <AiFillCaretDown
                                                            className={`${open ? 'font-bold rotate-180' : 'text-opacity-70'}
                                                        ml-1 h-4 w-4 mt-1 text-black-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                                                            aria-hidden="true"
                                                        />

                                                    </Popover.Button>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel className="absolute z-10 max-w-sm w-40 px-4 mt-2 transform sm:px-0 lg:max-w-3xl">
                                                            <div className="overflow-hidden border border-black">
                                                                <div className="relative flex flex-col gap-8 bg-white p-7 lg:grid-cols-2">

                                                                    <a href='#' className=" p-3 pb-5 -m-3 transition hover:text-opacity-100 hover:text-violet-700">Challenges</a>
                                                                    <a href='#' className=" p-2 pb-5 -m-3 transition hover:text-opacity-100 hover:text-violet-700">Docs</a>
                                                                    <a href='#' className=" p-2 pb-5 -m-3 transition hover:text-opacity-100 hover:text-violet-700">Cheatsheets</a>
                                                                    <a href='#' className=" p-2 pb-5 -m-3 transition hover:text-opacity-100 hover:text-violet-700">Articels</a>
                                                                    <a href='#' className=" p-2 pb-5 -m-3 transition hover:text-opacity-100 hover:text-violet-700">Videos</a>
                                                                    <a href='#' className=" p-2 pb-5 -m-3 transition hover:text-opacity-100 hover:text-violet-700">Blog</a>
                                                                    <a href='#' className=" p-2 pb-5 -m-3 transition hover:text-opacity-100 hover:text-violet-700">Projects</a>
                                                                    <a href='#' className=" p-2 pb-5 -m-3 transition hover:text-opacity-100 hover:text-violet-700">Career Center</a>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>

                                                </>
                                            )}
                                        </Popover>

                                        <Popover className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button
                                                        className={`
                                                ${open ? 'font-bold ' : 'text-opacity-90'}
                                                text-black font-['system-ui'] inline-flex items-center text-base hover:text-opacity-100 hover:text-violet-700`}>
                                                        <span>Community</span>
                                                        <AiFillCaretDown
                                                            className={`${open ? 'font-bold rotate-180' : 'text-opacity-70'}
                                                        ml-1 h-4 w-4 mt-1 text-black-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                                                            aria-hidden="true"
                                                        />

                                                    </Popover.Button>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel className="absolute z-10 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">

                                                                    <a
                                                                        href='#'
                                                                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                                    >
                                                                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">

                                                                        </div>
                                                                        <div className="ml-4">

                                                                        </div>
                                                                    </a>

                                                                </div>
                                                                <div className="p-4 bg-gray-50">
                                                                    <a
                                                                        href="#"
                                                                        className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                                    >
                                                                        <span className="flex items-center">
                                                                            <span className="text-sm font-medium text-gray-900">
                                                                                Documentation
                                                                            </span>
                                                                        </span>
                                                                        <span className="block text-sm text-gray-500">
                                                                            Start integrating products and tools
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>

                                                </>
                                            )}
                                        </Popover>

                                        <a hre="#" className="text-black font-['system-ui'] text-base">
                                            For Business</a>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="hidden md:block">
                                    <div className="flex items-center gap-10">
                                        {/* search button*/}
                                        <Popover className="relative mt-2">
                                            <Popover.Button className="hover:bg-white/[.50] py-2 px-2 rounded">
                                                <IoSearchOutline className="h-6 w-6 font-thin text-black-50 "/>
                                            </Popover.Button>
                                        </Popover>

                                        <a href="#" className="text-violet-800 text-base 
                                        font-medium 
                                        hover:bg-white/[.50] py-2 px-3 rounded">Log In</a>
                                    </div>
                                </div>

                                {/*mobile menu button */}
                                <div className="sm:block md:hidden">
                                    <button className="text-black font-bold rounded" onClick={menuShowBtn}>
                                        {mobileMenuShow ?
                                            ''
                                            :
                                            <HiMenuAlt2 className=" block h-10 w-10"></HiMenuAlt2>
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* mobile menu */}
                    {mobileMenuShow ?
                        <Popover className="bg-white sm:hidden absolute w-full h-full z-10 top-0">
                            <div className='mobile-nav flex px-4 py-4 justify-between  overscroll-auto'>
                                <div className="flex-shrink-0">
                                    <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="code academy logo"></img>
                                </div>

                                <button className="font-thin rounded " onClick={menuHideBtn}>
                                    {mobileMenuShow ?
                                        <HiX className="block h-10 w-10 ml-10"></HiX> :
                                        ''
                                    }
                                </button>
                            </div>

                            <div className="search-input px-4 mt-2 pb-10">
                                <label className="relative block">
                                    <input
                                        className="h-12 w-full border border-black shadow-none focus:outline-none focus:border pl-4 px-12 placeholder:text-slate-500"
                                        type="text"
                                        name="search"
                                        placeholder="Search our catalog" >
                                    </input>
                                    <span className="absolute bg-white-500 right-0 px-4 h-12 flex items-center top-0"><IoSearchOutline className="h-5 w-5"></IoSearchOutline></span>
                                </label>
                            </div>

                            <div className="menu-header px-4">
                                <a href="#" className="text-black-600 font-normal 
                                font-[system-ui]">Catalog</a>
                            </div>


                            <div className="mobile-menu-list flex-col px-4">
                                <Menu.Item
                                    as="a" className="flex items-center justify-between my-10 focus:outline-none" onClick={resourcesMobileSubMenuOpen}>
                                    <div className="flex items-center">
                                        <span className="mr-5">
                                            <FaRegAddressBook></FaRegAddressBook></span>Resources
                                    </div>
                                    <div className='flex'>
                                        <HiOutlineChevronRight></HiOutlineChevronRight>
                                    </div>
                                </Menu.Item>

                                <Menu.Item
                                    as="a" className="flex items-center justify-between my-10" onClick={communityMobileSubMenuOpen}>
                                    <div className="flex items-center">
                                        <span className="mr-5">
                                            <HiViewGridAdd></HiViewGridAdd></span>Community
                                    </div>
                                    <div className='flex'>
                                        <HiOutlineChevronRight></HiOutlineChevronRight>
                                    </div>
                                </Menu.Item>

                                <Menu.Button
                                    as="a" className="flex items-center justify-between my-10">
                                    <div className="flex items-center">
                                        <span className="mr-5">
                                            <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar></span>Pro Pricing
                                    </div>
                                    <div className='flex'>
                                        <HiOutlineChevronRight></HiOutlineChevronRight>
                                    </div>
                                </Menu.Button>
                            </div>

                            <div className="menu-footer px-4 py-0">
                                <a href="#" className="text-black-600 font-normal 
                                font-[poppins]">For Business</a>
                            </div>

                            <div className="sign-group flex items-center flex-col py-10">
                                <button
                                    className="px-3 py-2 w-24 bg-blue-800 text-white font-medium rounded mb-5">
                                    Sign Up</button>
                                <button className=" text-indigo-600  font-medium">Log In</button>
                            </div>

                            {/* mobile submenu */}
                            {
                                resourcesSubMenuShow ?
                                    <Popover className="bg-white absolute sm:hidden w-full h-full z-1 top-16">
                                        <div className="mobile-submenu-list flex-col px-4">
                                            {/* back btn */}
                                            <button className="back-button flex items-center font-base mt-2" onClick={resourcesMobileSubMenuClose}><HiOutlineChevronLeft className="mr-2"></HiOutlineChevronLeft> Full Menu</button>
                                            {/* submenu title */}
                                            <p className="submenu-title font-semibold text-2xl mt-5">Resources</p>
                                            <Menu.Item as="a" href="#" className="flex items-center justify-between my-10 focus:outline-none text-black-300 hover:bg-transparent hover:text-blue-800 ">
                                                <div className="flex items-center">
                                                    Challenges
                                                </div>
                                            </Menu.Item>

                                            <Menu.Item as="a" href="#" className="flex items-center justify-between my-10 focus:outline-none text-black-300 hover:bg-transparent hover:text-blue-800 ">
                                                <div className="flex items-center">
                                                    Docs
                                                </div>
                                            </Menu.Item>


                                            <Menu.Item as="a" href="#" className="flex items-center justify-between my-10 focus:outline-none text-black-300 hover:bg-transparent hover:text-blue-800 ">
                                                <div className="flex items-center">
                                                    CheetSheet
                                                </div>
                                            </Menu.Item>

                                            <Menu.Item as="a" href="#" className="flex items-center justify-between my-10 focus:outline-none text-black-300 hover:bg-transparent hover:text-blue-800 ">
                                                <div className="flex items-center">
                                                    Articels
                                                </div>
                                            </Menu.Item>


                                            <Menu.Item as="a" href="#" className="flex items-center justify-between my-10 focus:outline-none text-black-300 hover:bg-transparent hover:text-blue-800 ">
                                                <div className="flex items-center">
                                                    Videos
                                                </div>
                                            </Menu.Item>
                                        </div>
                                    </Popover>
                                    :
                                    ""
                            }

                            {
                                communitySubMenuShow ?
                                    <Popover className="bg-white absolute sm:hidden w-full h-full z-1 top-16">
                                        <div className="mobile-submenu-list flex-col px-4">
                                            {/* back btn */}
                                            <button className="back-button flex items-center font-base mt-2" onClick={communityMobileSubMenuClose}><HiOutlineChevronLeft className="mr-2"></HiOutlineChevronLeft> Full Menu</button>
                                            {/* submenu title */}
                                            <p className="submenu-title font-semibold text-2xl mt-5">Community</p>
                                            <Menu.Item as="a" href="#" className="flex items-center justify-between my-10 focus:outline-none text-black-300 hover:bg-transparent hover:text-blue-800 ">
                                                <div className="flex items-center">
                                                    Challenges
                                                </div>
                                            </Menu.Item>

                                            <Menu.Item as="a" href="#" className="flex items-center justify-between my-10 focus:outline-none text-black-300 hover:bg-transparent hover:text-blue-800 ">
                                                <div className="flex items-center">
                                                    Docs
                                                </div>
                                            </Menu.Item>


                                            <Menu.Item as="a" href="#" className="flex items-center justify-between my-10 focus:outline-none text-black-300 hover:bg-transparent hover:text-blue-800 ">
                                                <div className="flex items-center">
                                                    CheetSheet
                                                </div>
                                            </Menu.Item>

                                            <Menu.Item as="a" href="#" className="flex items-center justify-between my-10 focus:outline-none text-black-300 hover:bg-transparent hover:text-blue-800 ">
                                                <div className="flex items-center">
                                                    Articels
                                                </div>
                                            </Menu.Item>


                                            <Menu.Item as="a" href="#" className="flex items-center justify-between my-10 focus:outline-none text-black-300 hover:bg-transparent hover:text-blue-800 ">
                                                <div className="flex items-center">
                                                    Videos
                                                </div>
                                            </Menu.Item>
                                        </div>
                                    </Popover>
                                    :
                                    ""
                            }



                        </Popover>
                        : null
                    }
                </Menu>
            </div>
        </header>
    )
}

export default Navigation
