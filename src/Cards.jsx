import React, { useState } from 'react';
import { TbFileSmile } from "react-icons/tb";
import { motion } from "motion/react";
import ExpandedCard from './ExpandedCard';

function Cards({ cardDetails, foregroundRef,id }) {
  const [view, setView] = useState(false);

  const [savedTitle, setSavedTitle] = useState(cardDetails.title);
  const [savedDesc, setSavedDesc] = useState(cardDetails.desc);

  return (
    (!view) ? (
      <motion.div 
        drag 
        dragConstraints={foregroundRef}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 25 }}
        className='relative text-zinc-300 w-60 h-75 bg-zinc-600 rounded-2xl cursor-grab overflow-clip'
      >
        <div className='flex px-5 pt-6'>
          <TbFileSmile className='text-4xl mr-1' />
          <div>
            <p className='font-semibold'>
              {
                (savedTitle.length>16)?savedTitle.slice(0,16)+"...":savedTitle
              }
            </p>
            <p className='leading-2 text-zinc-400 text-sm'>{cardDetails.meta}</p>
          </div>
        </div>
        <p className='mt-6 px-5'>{
          (savedDesc.length>110)?savedDesc.slice(0,110)+"...":savedDesc
        }
        </p>
        <div className='absolute bg-orange-400 h-15 bottom-0 w-full'>
          <p className='flex justify-center items-center h-full cursor-pointer text-2xl font-semibold'
            onClick={() => {
              setView(true);
            }}
          >
            VIEW NOTE
          </p>
        </div>
      </motion.div>
    ) : <ExpandedCard cardDetails={cardDetails} setView={setView} id={id}/>
  );
}

export default Cards;
