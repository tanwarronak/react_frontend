import { GiFlowerPot } from "react-icons/gi";
import { FaMobileScreen } from "react-icons/fa6";
import { FcHome } from "react-icons/fc";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaCarrot } from "react-icons/fa";
import { Link } from "react-router-dom";
const Categories = ()=>{

  
    return <>
    <div className="bg-slate-100 h-fit ">
        <p>Browse more</p>
    <div className="flex justify-between ">
        <Link to="/cars" className="flex items-center content-center flex-column"><GiFlowerPot className="size-10"/><p>DECORATION</p></Link>
        <Link to="/phones" className="flex items-center content-center flex-column"><FaMobileScreen className="size-10"/><p>PHONES</p></Link>
        <Link to="/" className="flex items-center content-center flex-column"><FcHome className="size-10"/><p>Home</p></Link>
        <Link to="/laptops" className="flex items-center content-center flex-column"><AiOutlineLaptop className="size-10"/><p>LAPTOPS</p></Link>
        <Link to="/sports" className="flex items-center content-center flex-column"><FaCarrot className="size-10"/><p>GROCERIES</p></Link>
    </div>
    </div>
    </>
}

export default Categories