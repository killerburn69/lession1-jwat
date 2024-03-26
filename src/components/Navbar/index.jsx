import React, { useState } from 'react'
import logo from "../../assets/logo_cyber.svg"
import { RiArrowDownSLine } from "react-icons/ri";
import { linkArray } from '../../dummy/dummyData';
import LinkItem from '../LinkItem';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
const Navbar = () => {
    const [isClose, setIsClose] = useState(false)
  return (
    <nav className='bg-[#03204c] w-full flex px-[10px] lg:px-[96px] py-[5px] gap-x-40 items-center justify-between lg:justify-start'>
        <img src={logo} alt="logo" className='w-[100px] md:w-[150px] lg:w-[200px]'/>
        <RxHamburgerMenu className='block lg:hidden text-white' onClick={()=>setIsClose(!isClose)}/>
        <div className={`fixed justify-between lg:w-full ${!isClose ? "hidden" : "flex"} lg:flex flex-col lg:flex-row  top-0 right-0 bg-[#03204c] gap-y-3 lg:gap-x-10 lg:relative h-full w-[300px] p-3 lg:p-0`}>
            <ul className='flex items-start lg:items-center gap-y-3 lg:gap-x-10 text-white font-semibold text-[18px] lg:flex-row flex-col'>
                <li className='lg:hidden flex items-end'>
                    <IoIosClose onClick={()=>setIsClose(!isClose)}/>
                </li>
                {linkArray.map((item,index)=>(
                    <LinkItem key={item.id} item={item}/> 
                ))}
            </ul>
            <button className='font-medium text-[#03204c] bg-white px-[20px] py-[5px] rounded-lg'>Contact Us</button>
        </div>
    </nav>
  )
}

export default Navbar