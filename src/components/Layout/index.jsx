import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='max-w-[1360px] mx-auto py-[20px]'>
        {children}
    </div>
  )
}

export default Layout