import Navbar from "../src/components/Navbar"
import Categories from "../src/components/Categories"
import Bottom from "../src/components/Bottom "
import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
const Cars = ()=>{
  const [data,setdata] = useState([]);
  // const navigate = useNavigate(); 
  useEffect(()=>{
  fetch('https://dummyjson.com/products/category/home-decoration')
.then(res => res.json())
.then(item=>setdata(item.products));
  },[])

  
    return<>
    <Navbar/>
      <Categories/><div className="flex flex-wrap justify-around gap-y-1 relative ">
      {data.map((item)=><div className="w-48 bg-light-subtle  h-56 rounded-lg relative" key={item.id} > <div className="w-40  h-48 object-fit-contain d-flex justify-content-center border-bottom  border-info" style={{width:"80%",height:"60%",padding:"5% ",marginLeft:"10%"}}>
        <img src={item.images[0]} style={{height:'70%'}}></img></div>
          <center><h1>{item.brand}</h1>
          <h1>price : {item.price}</h1></center>
        </div>)}</div>
    <Bottom></Bottom>
    </>
}

export default Cars


