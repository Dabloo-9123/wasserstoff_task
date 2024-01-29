import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'

import axios from 'axios'
import './singlecard.css'
import { addToCart } from '../../redux/cartSystem'
import FooterComp from '../footer/FooterComp'
// import FooterComp from '../footer/FooterComp'




function SingleCart() {
  const data1=useParams()
  const[data,setdata]=useState('');
  const [Loader,setLoader]=useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
     axios.get('https://ecommerce-server-r7xn.onrender.com/api/data')
     .then(res=>res.data)
     .then(store=>{
      // console.log(store);
      setdata(store)
      setLoader(false)
     })
  },[])
  console.log(data);
  
  return (
    <>
  {Loader ? <h1>Loading</h1> :
   <div className='parent'>
           
   { data && data.filter((item)=>item.id===Number(data1.id)).map((item)=>{
         return(
        <>
      
        <div  className='cart_single'>
       <div className='cart_single_top'>
      
        <NavLink to={`/product/${item.id}`} >
        <img src={item.img} alt='mobile'/> </NavLink>
       
       </div>
          
         <div className='cart-bottom_single'>
         <label className='a'>Item Name:-</label>
         <h3>{item.name.slice(0,100)}...</h3>
         <label className='a'>Item Price:-</label>
         <p> ${item.price}</p>
         <label className='a'>Item Rating:-</label>
          <p style={{display:"inline-block"}}>{item.rating} </p>
          <img style={{width:'1rem',height:'1rem'}} src='data:image/jpeg;base64,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' alt='star'/>
         <label className='a'>Item Description:-</label>
         <p>${item.description.slice(0,150)}...</p>
         <button onClick={()=>dispatch(addToCart({id:item.id,name:item.name,price:Number(item.price),quantity:item.quant,image:item.img}))}>
                    Add to cart
                    </button>
         </div>
        </div>

       <h1 className='similar_product_text'>Similar products...</h1>
       <div className='similar_parent'>
           
           { data && data.filter((item)=>item.id>Number(data1.id) && item.id<Number(data1.id)+5).map((item)=>{
                 return(
                <>
              
                
              <div  className='cart'>
                <NavLink to={`/product/${item.id}`} >
                <img src={item.img} alt='mobile'/> </NavLink>
                  <p>{item.name.slice(0,30)}...</p>
                 <div className='cart-bottom'>
                 <p>Price ${item.price}</p>
                 <button onClick={()=>dispatch(addToCart({id:item.id,name:item.name,price:Number(item.price),quantity:item.quant,image:item.img}))}>
                    Add to cart
                    </button>
                 </div>
                </div>
              
               
                
                  </>
                 
                  
                 )
             })}
        </div>
       
          </>
         
          
         )
     })}
</div>}
<FooterComp/>
    </>
  )
}

export default SingleCart
