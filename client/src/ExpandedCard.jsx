import React, { useState } from 'react'
import { TbFileSmile } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Tooltip } from 'react-tooltip';
import metaDate from './date';

function ExpandedCard({cardDetails, setView, id, updateFunc, isAdd, deleteFunc}) {
    const [title, setTitle] = useState(cardDetails.title);
    const [desc, setDesc] = useState(cardDetails.desc);
    return (
        <div className='w-full h-screen absolute top-0 backdrop-blur-md z-20 left-0 lg:-left-4'>
            <div className='relative text-zinc-300 w-3/4 lg:w-1/2 h-2/3 lg:h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-600  rounded-xl lg:rounded-2xl overflow-clip p-4 z-50 shadow-[0_0_6px_rgba(0,0,0,0.25)]'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <TbFileSmile className='text-5xl lg:text-6xl mr-1' />
                        <div>
                            <input
                                className='text-2xl lg:text-4xl outline-none bg-transparent text-white w-35 lg:w-130'
                                value={
                                    (title==="" || title===undefined)?"":title
                                }
                                onChange={(e) => {
                                        setTitle(e.target.value)
                                    }
                                }
                                placeholder={
                                    (title==="" || title===undefined)?"File "+(id+1):""
                                }
                            />
                            <p className='text-sm lg:text-base leading-3.5 text-zinc-400'>{
                                    (cardDetails.meta===undefined)?metaDate:cardDetails.meta
                                }
                            </p>
                        </div>
                    </div>
                    <RxCross2
                        data-tooltip-id='close'
                        className='text-zinc-300 text-4xl hover:text-zinc-400 cursor-pointer outline-none'
                        onClick={() => {
                                setView(false);
                            }
                        }
                    />
                </div>

                <textarea
                    className='mt-10 px-4 w-full h-3/5 outline-none bg-transparent text-white'
                    value={
                        (desc==="" || desc===undefined)?"":desc
                    }
                    placeholder={
                        (desc==="" || desc===undefined)? "Write your thoughts here...":desc
                    }
                    onChange={(e) => {
                            setDesc(e.target.value)
                        }
                    }
                />

                <IoMdCheckmark
                    data-tooltip-id='done'
                    className='absolute bottom-4 right-4 text-zinc-300 outline-none text-4xl hover:text-zinc-400 cursor-pointer'
                    onClick={() => {
                        if((title!==undefined && desc!==undefined) || desc!==undefined){
                            updateFunc(title,desc);
                        }
                        setView(false);
                    }}
                />
                {(!isAdd)?<FaTrashAlt
                    data-tooltip-id='del'
                    className='absolute bottom-6 left-5 text-red-300 outline-none text-3xl hover:text-red-400 cursor-pointer'
                    onClick={() => {
                        deleteFunc(id);
                        setView(false);
                    }}
                />:null}

                <Tooltip id='done' content='Confirm' place='left' style={{ borderRadius: 10 }} variant='light' />
                <Tooltip id='del' content='Delete Card' place='right' style={{ borderRadius: 10 }} variant='light' />
                <Tooltip id='close' content='Close' place='left' style={{ borderRadius: 10 }} variant='light' />
            </div>
        </div>
    )
}

export default ExpandedCard