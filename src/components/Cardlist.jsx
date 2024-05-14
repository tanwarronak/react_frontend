import Cards from './Cards'
import Spine from './Spinner';
import { useContext } from 'react';
import DataContext from '../contexts/datastore';
const Cardlist = ()=>{
    const {data} = useContext(DataContext);

    return <>
        <div className="flex flex-wrap justify-around gap-y-1 relative">  
    { (data.length===0)?<Spine></Spine>: data.map((item)=> <Cards item={item} key={item.id}></Cards>)
    }
   </div>
   </>
}

export default Cardlist;