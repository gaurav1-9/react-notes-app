import React, { useState } from 'react'
import { TbFileSmile } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Tooltip } from 'react-tooltip';

function ExpandedCard({cardDetails, setView, id}) {
    const [title, setTitle] = useState(cardDetails.title);
    const [desc, setDesc] = useState(cardDetails.desc);
    var prevTitle = cardDetails.title;
    var prevDesc = cardDetails.desc;
    return (
        <div className='w-full h-screen absolute top-0 backdrop-blur-md z-20 -left-4'>
            <div className='relative text-zinc-300 w-1/2 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-600 rounded-2xl overflow-clip p-4 z-50 shadow-[0_0_6px_rgba(0,0,0,0.25)]'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <TbFileSmile className='text-6xl mr-1' />
                        <div>
                            <input
                                className='text-4xl outline-none bg-transparent text-white'
                                value={
                                    (title==="")?"File "+(id+1):title
                                }
                                onChange={(e) => {
                                        setTitle(e.target.value)
                                    }
                                }
                            />
                            <p className='leading-3.5 text-zinc-400'>{cardDetails.meta}</p>
                        </div>
                    </div>
                    <RxCross2
                        data-tooltip-id='close'
                        className='text-zinc-300 text-4xl hover:text-zinc-400 cursor-pointer outline-none'
                        onClick={() => {
                                console.log(title+" "+desc)
                                setView(false);
                            }
                        }
                    />
                </div>

                <textarea
                    className='mt-10 px-4 w-full h-3/5 outline-none bg-transparent text-white'
                    value={desc}
                    onChange={(e) => {
                            setDesc(e.target.value)
                        }
                    }
                />

                <IoMdCheckmark
                    data-tooltip-id='done'
                    className='absolute bottom-4 right-4 text-zinc-300 outline-none text-4xl hover:text-zinc-400 cursor-pointer'
                    onClick={() => {
                        console.log(title);
                        console.log(desc);
                        // setTitle(title);
                        // setSavedDesc(cardDes);
                        setView(false);
                    }}
                />

                <Tooltip id='done' content='Confirm' place='left' style={{ borderRadius: 10 }} variant='light' />
                <Tooltip id='close' content='Close' place='left' style={{ borderRadius: 10 }} variant='light' />
            </div>
        </div>
    )
}

export default ExpandedCard