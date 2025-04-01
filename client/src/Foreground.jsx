import React, { useRef, useState } from 'react'
import Cards from './Cards';
import { FiPlusCircle } from "react-icons/fi";
import { Tooltip } from 'react-tooltip'
import ExpandedCard from './ExpandedCard';
import metaDate from './date';

function Foreground() {
    const componentRef = useRef(null);
    

    const [cardInfo, setCardInfo] = useState([
        {
        "title": "👋🏻 Hello There",
        "desc": "Let's get started! ✨ Add your first entry now📝✍🏻.\nYou can drag me around as well.\n ~Gaurav",
        "meta": metaDate
        },
    ])

    function dataChange(id,title,desc){
        cardInfo[id].title = title;
        cardInfo[id].desc = desc;
    }

    const [addView, setAddView] = useState(false)

    function addData(title,desc){
        setCardInfo(prev => [...prev, { title: title, desc: desc, meta: metaDate }]);
    }

    return (
    <div ref={componentRef} className='overflow-hidden fixed  top-0 left-0 w-full h-screen px-2 py-4 lg:px-4 lg:py-4 z-10'>
        <div className='mt-14 lg:mt-0 w-screen flex flex-wrap gap-2'>
            {
                cardInfo.map((item,index)=>(
                    (item.desc!=="" || item.title!=="")
                    ?<Cards key={index} id={index} cardDetails={item} foregroundRef={componentRef} dataChange={dataChange} setCardInfo={setCardInfo}/>
                    :null
                ))
            }
        </div>
        <div className='absolute top-8 right-8'>
            <FiPlusCircle 
                data-tooltip-id='addNew' 
                className='text-zinc-500 text-3xl cursor-pointer lg:text-5xl'
                onClick={()=>{
                        (cardInfo.length<10)?
                        setAddView(true)
                        : null
                    }
                }
            />
            <Tooltip
                id='addNew'
                content={(cardInfo.length<10)?`Add new`:`Maximum note limit reached`}
                place='bottom'
                variant='light'
                style={{borderRadius:10}}
            />
        </div>
        {
            (addView)
            ?<ExpandedCard cardDetails={cardInfo} id={cardInfo.length} setView={setAddView} isAdd={true} updateFunc={addData} deleteFunc={(id) => setCardInfo(prev => prev.filter((_, i) => i !== id))}/>
            :null
        }
    </div>
  );
}

export default Foreground