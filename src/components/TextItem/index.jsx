import React from 'react'

const TextItem = ({title,desc}) => {
  return (
    <div className='flex flex-col gap-y-2'>
        <h4 className='font-semibold text-[25px] text-[#03204C]'>{title}</h4>
        <p className='text-[17px] font-medium'>{desc}</p>
    </div>
  )
}

export default TextItem