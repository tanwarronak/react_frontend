import { useLocation } from "react-router-dom"
const Showdata = ()=>{
    const location = useLocation();
    const data = location.state
    return (
        <>
        <div className="card">
  <img src={data.images[0]} className="card-img-top" />

  <div className="card-body">
    <h5 className="card-title">{data.brand}</h5>
    <p className="card-text">{data.description}</p>
  </div>
  <div className="card" style={{width: "18rem"}}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">price : <span className="bg-secondary-subtle">{data.price}</span></li>
    <li className="list-group-item">rating : <span className="bg-secondary-subtle">{data.rating}</span></li>
    <li className="list-group-item">stock : <span className="bg-secondary-subtle">{data.stock}</span></li>
  </ul>
</div>
<button type="button" className="btn bg-success">Buy now</button>
</div>
        
        </>
    )
}


export default Showdata