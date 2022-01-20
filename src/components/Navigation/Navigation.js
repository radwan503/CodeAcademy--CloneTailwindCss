import React, { Fragment } from 'react';
import { Disclosure, Popover, Transition, Manu } from '@headlessui/react';
import { IoSearchOutline } from "react-icons/io5";
import { AiFillCaretDown } from 'react-icons/ai'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'


const Navigation = () => {
    return (
        <header>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-transparent">
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
                                                text-black inline-flex items-center text-base hover:text-opacity-100 hover:text-violet-700`}>
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
                                                text-black inline-flex items-center text-base hover:text-opacity-100 hover:text-violet-700`}>
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

                                        <a hre="#" className="text-black font-['system-ui'] text-base">For Business</a>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="hidden md:block">
                                    <div className="flex items-center gap-10">
                                        <Popover className="relative mt-2">
                                            <Popover.Button className="hover:bg-white/[.50] py-2 px-2 rounded">
                                                <IoSearchOutline className="h-7 w-7 font-thin text-black-50 " />
                                            </Popover.Button>
                                        </Popover>
                                        <a href="#" className="text-violet-800 text-base 
                                        font-medium 
                                        hover:bg-white/[.50] py-2 px-3 rounded">Log In</a>
                                    </div>
                                </div>

                                <div className="sm:block md:hidden">
                                    <Disclosure.Button>
                                            <MenuIcon className="block h-10 w-10"></MenuIcon>
                                    </Disclosure.Button>
                                </div>
                                
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden bg-gray-200">
                        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
                            <Disclosure.Button
                                as="a" href="https://xd.adobe.com/ideas/process/wireframing/wireframing-for-responsive-design/" className="bg-gray-800">dfgg
                            </Disclosure.Button>

                            <Disclosure.Button
                                as="a" className="bg-gray-800">dfgg
                            </Disclosure.Button>

                            <Disclosure.Button
                                as="a" className="bg-gray-800">dfgg
                            </Disclosure.Button>

                        </div>
                    </Disclosure.Panel>
                </Disclosure>
            </div>
        </header>
    )
}

export default Navigation
