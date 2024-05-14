import { useState } from "react"
import { Form, useNavigate } from "react-router-dom"

const Addata = ()=>{
    const navigate = useNavigate();
    const [product,setproduct] = useState({
        images:'',
        brand:'',
        price:''})
        const handleonfuck = (event)=>{
            const {name,value} = event.target;
            setproduct(item=>({
                ...item,
                [name]:value
            }))
        }
        const handleonsubmit = (event)=>{
            event.preventDefault();
            if(product.brand===""||product.images===""||product.price===""){
              alert("please fill all mandatory fields")
            }
            else{
              fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
              })
              .then(res => res.json())
              .then(item=>console.log(item));
              
              return navigate("/")
            }
        }

    return(<> <div className="bg-light-subtle " style={{marginTop:"20%",marginLeft:"5%"}}>
    <Form method="post" onSubmit={handleonsubmit} action="/">
    <div className="mb-3">
    <label  className="form-label"><strong>product image : </strong></label>
    <input type="file" name="images" onChange={handleonfuck} value={product.images} className="w-50 p-1 form-control border border-success" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label  className="form-label"><strong>product name : </strong></label>
    <input type="text" name="brand" value={product.brand} onChange={handleonfuck} className="w-50 p-1 form-control border border-success" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
  <label className="form-label" ><strong>enter product price : </strong> </label>
    <input type="number" name="price" value={product.price} onChange={handleonfuck} className="w-50 p-1 form-control border border-success" id="exampleCheck1"/>
  </div>
  <button type="submit" className="btn bg-success"><strong>Submit</strong></button>
    </Form>
    </div></>)
}


export default Addata




  