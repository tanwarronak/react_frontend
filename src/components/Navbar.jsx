import { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { GrNotification } from "react-icons/gr";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    // const [item,setitem] = useState();
    // const handleOnSearch = (event)=>{
    //     const searched = event.target.value
    //     setitem(searched);
    // }
    // fetch(`https://dummyjson.com/products/search?q=${item}`)
    // .then(res => res.json())
    // .then(item=>console.log(item));
    return <>
    <div className="bg-gray-100 flex justify-between"><Link to="/" className="font-bold text-2xl ml-6 italic text-indigo-600">loL</Link><div className="flex mr-6 items-center gap-x-1"><GrLocation /> khajpur</div></div> 
    <div className="bg-slate-300 h-12 flex items-center sticky top-0 z-10"><input type="search" className="h-9 border-gray-900 rounded-lg border-2 w-4/5 ml-3 text-center" placeholder="search for item"  /><GrNotification className="size-7 relative left-6" /></div>
       </>
}

export default Navbar