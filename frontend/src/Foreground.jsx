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
    <div ref={componentRef} className='overflow-hidden fixed flex flex-wrap gap-2 top-0 left-0 w-full h-screen p-4 z-10'>
        {
            cardInfo.map((item,index)=>(
                (item.desc!=="" || item.title!=="")
                ?<Cards key={index} id={index} cardDetails={item} foregroundRef={componentRef} dataChange={dataChange} setCardInfo={setCardInfo}/>
                :null
            ))
        }
        <div className='absolute top-8 right-8'>
            <FiPlusCircle 
                data-tooltip-id='addNew' 
                className='text-zinc-500 text-5xl cursor-pointer'
                onClick={()=>setAddView(true)}
            />
            <Tooltip
                id='addNew'
                content='Add new'
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