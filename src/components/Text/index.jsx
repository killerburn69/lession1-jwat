import React from 'react'
import { arrayTexts } from '../../dummy/dummyData'
import TextItem from '../TextItem'

const Text = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]'>
        {arrayTexts.map((item,index)=>(
            <TextItem key={item.id} title={item.title} desc={item.desc}/>
        ))}
    </div>
  )
}

export default Text