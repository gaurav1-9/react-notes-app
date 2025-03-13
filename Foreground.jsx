import React from 'react'
import Cards from './Cards';

function Foreground() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();

    const cardInfo = [
        {
        "title": "File 1",
        "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur dicta vitae doloremque laborum earum!",
        "meta": d.getDate()+" "+months[d.getMonth()]+", "+d.getFullYear()
        },
        {
        "title": "File 2",
        "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur dicta vitae doloremque laborum earum!",
        "meta": d.getDate()+" "+months[d.getMonth()]+", "+d.getFullYear()
        }
    ]

    return (
    <div className='overflow-hidden absolute top-0 left-0 w-full h-screen p-4 z-10'>
        <Cards cardDetails={cardInfo[0]}/>
    </div>
  );
}

export default Foreground