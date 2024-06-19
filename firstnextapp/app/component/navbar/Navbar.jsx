import React from 'react'

const Navbar = () => {
  return (
    <div>
          <div className='bg-black text-white flex justify-around items-center h-[40px] p-5'>
              <div className='text-xl font-bold'>Home</div>
              <div className='text-xl font-bold'>About</div>
              <div className='text-xl font-bold'>Project</div>
              <div className='text-xl font-bold'>Contact</div>
          </div>
    </div>
  )
}

export default Navbar
