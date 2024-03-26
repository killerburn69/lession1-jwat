import React, { useState } from 'react'
import { linkArray } from '../../dummy/dummyData'
import { RiArrowDownSLine } from 'react-icons/ri'
const LinkItem = ({item}) => {
    const [isShow, setIsShow] = useState(false)
  return (
    <li className=' relative  cursor-pointer  '  onMouseEnter={()=>setIsShow(true)} onMouseLeave={()=>setIsShow(false)}>
        <div className='flex items-center gap-x-1 transition-all ease-in-out duration-150 hover:text-[#3bc4e2]'>    
            <span clas>{item.titleLink}</span>
            {item.subChild.length !== 0 && (
                <RiArrowDownSLine className='text-[20px]'/>
            )}
        </div>
        {item.subChild.length !==0 && (
            <div className='flex justify-center absolute top-[100%] left-[0] z-10'>
                <ul className={` bg-[#03204c] border-white border  ${isShow ? "scale-y-100" : "scale-y-0"} p-[20px] transition-all ease-in-out duration-150 w-[220px]`}>
                    {item.subChild.map((itemChild,indexChild)=>(
                        <li className='text-[14px] transition-all ease-in-out duration-150 hover:text-[#3bc4e2]' key={itemChild.id}>{itemChild.titleLink}</li>
                    ))}
                </ul>
            </div>
        )}
    </li>
  )
}

export default LinkItem