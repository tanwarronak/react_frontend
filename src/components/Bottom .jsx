import { Link } from "react-router-dom"
const Bottom = ({showonclicked})=>{
    return <><Link to="/sell_on_here">
      <div className="bg-gray-100 flex justify-content-center fixed w-full h-12 bottom-0 ">
      <button className="btn w-full btn-success" >sell on here</button>
        </div> </Link>
    </>
}

export default Bottom