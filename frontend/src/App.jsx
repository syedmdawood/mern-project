import { useEffect, useState } from "react";
import "./style.css"
const url = "http://localhost:8000/api/v1/products";

function App() {

  const [myProducts, setMyProducts]  = useState([]);
  const fetchProducts = async ()=>{
    const products = await fetch(url);
    const response = await products.json();
    setMyProducts(response);
    console.log(response);
  } 

  useEffect(()=>{
    fetchProducts();
  },[])

  return <>
  <div className="products">
    <h1>Products</h1>
    <main>
   {
    myProducts.map((product)=>{
      return <div className="myProduct">
        <img src={product.productImg} alt="" />
        <div className="product-footer">
        <h4>{product.title}</h4>
        <h4>{product.price}</h4>
        </div>
      </div>
    })
   }
   </main>
  </div>
  </>
}

export default App
