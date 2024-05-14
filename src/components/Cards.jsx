import { useNavigate } from "react-router-dom"
const Cards = ({item})=>{
  const navigate = useNavigate();
  const handleonhit = ()=>{
   navigate("/showdata",{state:item})
  }
    return(
    <div onClick={handleonhit}>
      <div className="flex flex-wrap justify-around gap-y-1 relative ">
      <div className="w-48 bg-light-subtle  h-56 rounded-lg relative" key={item.id} > <div className="w-40  h-48 object-fit-contain d-flex justify-content-center border-bottom  border-info" style={{width:"80%",height:"60%",padding:"5% ",marginLeft:"10%"}}>
        <img src={item.images[0]} style={{height:'70%'}}></img></div>
          <center><h1>{item.brand}</h1>
          <h1>price : {item.price}</h1></center>
        </div></div>
        </div>
    )
}

export default Cards