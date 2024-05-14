import './App.css'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Bottom from './components/Bottom '
import Cardlist from './components/Cardlist'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'
import DataContext from './contexts/datastore'

function App() {
  const [data,setdata] = useState([]);
  const [abortcontroller , setabort] = useState(new AbortController());
  useEffect(()=>{
const {signal} = abortcontroller;
    fetch('https://dummyjson.com/products',{signal})
    .then(res => res.json())
    .then(item=>setdata(item.products));

    return ()=>{
      setabort(signal.abort);
    } 
  
  },[]);
  
  return (<DataContext.Provider value={{data}}>
 <Navbar></Navbar>
 <Categories></Categories>
<Cardlist  ></Cardlist>
 <Bottom></Bottom>
  </DataContext.Provider>
  )
}

export default App
