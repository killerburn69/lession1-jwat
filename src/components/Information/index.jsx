import React from 'react'
import ReactPlayer from 'react-player'
const Information = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-x-[100px] mb-[80px]'>
        <div className='max-w-full lg:max-w-[640px]'>
            <ReactPlayer url="https://www.youtube.com/watch?v=GnnCvnvlNdc" muted={true} autoplay={true} className="lg:flex-1" style={{maxWidth:"100%"}}/>
        </div>
        <div className='lg:flex-1'>
            <h3 className='text-[#03204C] text-5xl mb-5 '>Container <span className='text-[#3BC4E2] block'>Shipping Business</span></h3>
            
            <p className='font-medium'>Ocean shipping is continuing to be a biggest domain in Global Trade and carriers strive to deliver service excellence in the face of dynamic market changes and the demands for better customer service. By providing a robust, web-compliant operating environment and user-friendly interface, container carriers can readily decentralize their processes across their shipping network while integrating them into a single system for better control and improved operational efficiency.</p>
        </div>
    </div>
  )
}

export default Information