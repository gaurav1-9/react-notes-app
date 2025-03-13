import React from 'react'
import { TbFileSmile } from "react-icons/tb";
import { motion } from "motion/react"


function Cards({cardDetails}) {
  return (
    <motion.div drag 
    dragConstraints={
        {left: 0, top:0, bottom:420, right:1325}
    }
    whileDrag={{scale:1.1}}
    className='text-zinc-300 px-5 pt-6 w-60 h-80 bg-zinc-600 rounded-2xl cursor-grab'>
        <div className='flex '>
            <TbFileSmile className='text-4xl'/>
            <div>
                <p className='font-semibold'>{cardDetails.title}</p>
                <p className='leading-2 text-zinc-400 text-sm'>{cardDetails.meta}</p>
            </div>
        </div>
        <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos blanditiis corporis recusandae laudantium ut!</p>
    </motion.div>
  )
}

export default Cards