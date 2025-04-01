import React from 'react'

function Background() {
  return (
    <>
      <div className='fixed w-full h-screen bg-zinc-800 z-0'>
        <h3 className='text-zinc-300/50 flex justify-center items-center p-20 text-md lg:text-xl '>NOTES LIST</h3>
        <h1 className="text-zinc-700/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] sm:text-[80px] md:text-[150px] lg:text-[200px]">notes</h1>
      </div>
    </>
  )
}

export default Background