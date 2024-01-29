import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSystem';
import { NavLink } from 'react-router-dom';
import FooterComp from '../footer/FooterComp';




const ProductSearch = () => {
    const dispatch=useDispatch()
const[data,setdata]=useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(()=>{
    axios.get('https://ecommerce-server-r7xn.onrender.com/api/data')
    .then(res=>res.data)
    .then(store=>{
     // console.log(store);
     setdata(store)
    })
 },[])
 console.log(data);

  const HandleSearch = (event) => {
   
    const searchTerm = event.target.value.toLowerCase();
    console.log(searchTerm);

    // Filter products based on the search term
    const filteredProducts =data.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
console.log(filteredProducts);
    // Update the state with the filtered products
    setFilteredProducts(filteredProducts);
    setSearchTerm(searchTerm);
  };

  return (
   <>
    <div className='search_main'>
      <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={HandleSearch}
      />
      {/* <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul> */}
      <div className='parent'>
           
           { filteredProducts && filteredProducts.filter((item)=>Number(item.rating)===5).map((item)=>{
                 return(
                <>
                  <div className='cart'>
                  <NavLink to={`/product/${item.id}`} >
                  <img src={item.img} alt='home'/>
                  </NavLink>
                  <p className='product_name'>{item.name.slice(0,30)}</p>
                 <div className='cart-bottom'>
                 <p>Price ₹{item.price}</p>
                 <button onClick={()=>dispatch(addToCart({id:item.id,name:item.name,price:Number(item.price),quantity:item.quant,image:item.img}))}>
                        Add to cart
                        </button>
                        
                 </div>
            
                  </div>
    
    
                  
                  </>
                 
                  
                 )
             })}
        </div>
    </div>
    <FooterComp/>
   </>
  );
};

export default ProductSearch