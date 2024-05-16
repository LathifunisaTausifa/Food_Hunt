import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/*left side*/}
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl flex sm:text-3xl lg:text-4xl px-2">
                    Food  <span className="font-bold"> Hunt</span>
                </h1>
                <div className="hidden sm:flex items-center bg-gray-200 rounded-full p-1 text-[15px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>
            {/* search-bar  */}
            <div className="bg-gray-200 flex items-center rounded-full px-2 ml-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} className="" />
                <input type="search" className="bg-transparent w-full focus:outline-none p-2 " placeholder="Enter Search" value="search" />
            </div>
            {/* cart */}
            <button className="hidden py-2 sm:flex items-center ml-1 bg-black text-white rounded-full">
                <BsFillCartFill size={20} className="mr-2" />Cart
            </button>

            {/* mobile_menu */}
            {/* outline */}
            {nav ? <div className="bg-black/80 fixed z-10 w-full h-screen top-0 left-0"></div>
                : ' '}
            {/* Sidebar */}
            <div className={nav ? 'bg-white w-[300px] fixed h-screen z-10 top-0 left-0 duration-300' : 'bg-white w-[300px] fixed h-screen z-10 top-0 left-[-100%] duration-300'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={30} className="top-4 right-4 absolute cursor-pointer" />
                <h2 className="text-2xl p-4">Pizza <span className="font-bold">Hut</span></h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="flex py-4 text-xl">
                            <TbTruckDelivery size={25} className="mr-4" /> Orders
                        </li>
                        <li className="flex py-4 text-xl">
                            <MdFavorite size={25} className="mr-4" /> Favourites
                        </li>
                        <li className="flex py-4 text-xl">
                            <FaWallet size={25} className="mr-4" /> Wallet
                        </li>
                        <li className="flex py-4 text-xl">
                            <MdHelp size={25} className="mr-4" /> Help
                        </li>
                        <li className="flex py-4 text-xl">
                            <AiFillTag size={25} className="mr-4" /> Promotions
                        </li>
                        <li className="flex py-4 text-xl">
                            <BsFillSaveFill size={25} className="mr-4" /> Best Ones
                        </li>
                        <li className="flex py-4 text-xl">
                            <FaUserFriends size={25} className="mr-4" /> Invite Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
