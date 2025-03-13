import React, { useState } from 'react'
import { TbFileSmile} from "react-icons/tb";
import { motion } from "motion/react"
import { RxCross2 } from "react-icons/rx";


function Cards({cardDetails,foregroundRef}) {
  var [view,setView] = useState(false);
  return (
    (!view)?<motion.div drag 
    dragConstraints={foregroundRef}
    whileDrag={{scale:1.1, cursor:"grabbing"}}
    dragTransition={{bounceStiffness:600, bounceDamping:25,}}
    className='relative text-zinc-300  w-60 h-75 bg-zinc-600 rounded-2xl cursor-grab overflow-clip'>
        <div className='flex px-5 pt-6'>
            <TbFileSmile className='text-4xl mr-1'/>
            <div>
                <p className='font-semibold'>{cardDetails.title}</p>
                <p className='leading-2 text-zinc-400 text-sm'>{cardDetails.meta}</p>
            </div>
        </div>
        <p className='mt-6 px-5'>{cardDetails.desc}</p>
        <div className='absolute bg-orange-400 h-15 bottom-0 w-full'>
          <p className='flex justify-center items-center h-full cursor-pointer text-2xl font-semibold'
          onClick={()=>{
            setView(true);
            viewCardDesc(cardDetails);
          }
          }
          >VIEW NOTE</p>
        </div>
    </motion.div>
    :
    <div className=' w-full h-screen absolute top-0 backdrop-blur-md z-20'>
      <div className='absolute text-zinc-300  w-1/2 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-600 rounded-2xl overflow-clip p-4 z-50 shadow-[0_0_6px_rgba(0,0,0,0.25)]'>
        <div className='flex justify-between'>
          <div className='flex'>
          <TbFileSmile className='text-6xl mr-1'/>
            <div>
              <p className='text-4xl'>{
                cardDetails.title
              }</p>
              <p className='leading-2 text-zinc-400'>{
                cardDetails.meta
              }</p>
            </div>
          </div>
          <RxCross2 className='text-zinc-300 text-4xl hover:text-zinc-400 cursor-pointer hover:scale-[1.1]' onClick={()=>setView(false)}/>
        </div>
        <p className='mt-10 px-4'>{cardDetails.desc}</p>
      </div>
    </div>
  )
}

function viewCardDesc(cardDetails){
  setView(true);
  console.log(cardDetails.desc);
}

export default Cards