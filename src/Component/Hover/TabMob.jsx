import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
const TabMob = () => {
  const [open, setOpen] = useState();

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const [yes, setYes] = useState();

  const handleYes = () => {
    setYes(true);
  }
  const handleNo = () => {
    setYes(false);
  }

  return (
    <div>
    <div className='flex flex-col items-center gap-7 p-10'>
    <div>
      <h1 className='flex items-center justify-center border p-3 bg-green-300 w-12 h-5 text-center' onMouseLeave={handleClose} onMouseEnter={handleOpen}>Open</h1>
      <h1 className='flex items-center justify-center border p-3 bg-green-300 w-12 h-5 text-center' onMouseEnter={handleYes} onMouseLeave={handleNo}>Yes</h1>
      </div>
      {
        open &&
        <form className='mx-auto relative border border-black w-[50%] h-[50%]'>
          {/* <ImCross onClick={handleClose} className='absolute right-2 top-2' /> */}
          <label>Name:</label>
          <input type="text" className='block border border-black' />
          <label >Password:</label>
          <input type="text" className='block border border-black' />
        </form>
      }
    </div>
    <div>
     
      {
        yes &&
        <form className='mx-auto relative border border-black w-[50%] h-[50%]'>
          {/* <ImCross onClick={handleClose} className='absolute right-2 top-2' /> */}
          <label>Name:</label>
          <input type="text" className='block border border-black' />
          <label >Password:</label>
          <input type="text" className='block border border-black' />
        </form>
      }
    </div>
    </div>
  )
}

export default TabMob
