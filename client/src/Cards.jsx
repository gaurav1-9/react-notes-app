import React, { useState } from 'react';
import { TbFileSmile } from "react-icons/tb";
import { motion } from "motion/react";
import ExpandedCard from './ExpandedCard';

function Cards({ cardDetails, foregroundRef, id, dataChange, setCardInfo }) {
  const [view, setView] = useState(false);

  const [title, setTitle] = useState(cardDetails.title);
  const [desc, setDesc] = useState(cardDetails.desc);

  function updateContent(title, desc){
    setTitle(title);
    setDesc(desc);
    dataChange(id,title,desc);
  }

  return (
    (!view) ? (
      <motion.div 
        drag 
        dragConstraints={foregroundRef}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 25 }}
        className='relative text-zinc-300 w-40 h-25 lg:w-60 lg:h-75 bg-zinc-600 rounded-xl lg:rounded-2xl cursor-grab overflow-clip'
      >
        <div className='flex px-2 pt-3 lg:px-5 lg:pt-6'>
          <TbFileSmile className='text-3xl mr-1 lg:text-4xl' />
          <div>
            <p className='font-semibold text-sm lg:text-lg'>
              {
                (title==="" || title===undefined)?"File "+(id+1)
                :(title.length>16)?title.slice(0,16)+"...":title
              }
            </p>
            <p className='leading-2 text-zinc-400 text-[10px] lg:text-sm'>{cardDetails.meta}</p>
          </div>
        </div>
        <p className='hidden lg:mt-6 lg:px-5 lg:inline-block'>{
          (desc.length>110)?desc.slice(0,110)+"...":desc
        }
        </p>
        <div className='absolute bg-orange-400 h-10 lg:h-15 bottom-0 w-full'>
          <p className='flex justify-center items-center h-full cursor-pointer text-lg lg:text-2xl font-semibold'
            onClick={() => {
              setView(true);
            }}
          >
            VIEW NOTE
          </p>
        </div>
      </motion.div>
    ) : <ExpandedCard cardDetails={cardDetails} setView={setView} id={id} isAdd={false} deleteFunc={(id) => setCardInfo(prev => prev.filter((_, i) => i !== id))} updateFunc={updateContent}/>
  );
}

export default Cards;
