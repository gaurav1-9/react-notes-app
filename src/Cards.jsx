import React, { useState } from 'react';
import { TbFileSmile } from "react-icons/tb";
import { motion } from "motion/react";
import ExpandedCard from './ExpandedCard';

function Cards({ cardDetails, foregroundRef,id }) {
  const [view, setView] = useState(false);

  const [title, setTitle] = useState(cardDetails.title);
  const [desc, setDesc] = useState(cardDetails.desc);

  function updateContent(title, desc){
    setTitle(title);
    setDesc(desc);
    console.log("Card: "+title+" "+desc);
  }

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
                (title==="")?"File "+(id+1)
                :(title.length>16)?title.slice(0,16)+"...":title
              }
            </p>
            <p className='leading-2 text-zinc-400 text-sm'>{cardDetails.meta}</p>
          </div>
        </div>
        <p className='mt-6 px-5'>{
          (desc.length>110)?desc.slice(0,110)+"...":desc
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
    ) : <ExpandedCard cardDetails={cardDetails} setView={setView} id={id} updateFunc={updateContent}/>
  );
}

export default Cards;
