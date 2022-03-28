import axios from 'axios';
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addItem,delItem } from '../../redux/action';
import { AiFillStar } from 'react-icons/ai';
import { NavLink, useParams } from 'react-router-dom'
import DATA from '../../Data';
import MEN from '../../menData';


function Product() {
  const [cartBtn, setcartBtn] = useState('add to cart')

  const prodid = useParams()
  const dispatch = useDispatch();

  const prodDetails = MEN.filter(x=>x.id==prodid.id)
  const product = prodDetails[0]
  console.log(product);

  const addProduct=(product)=>{
    if(cartBtn==='add to cart'){
      dispatch(addItem(product))
      setcartBtn('Remove from cart')
    }else{

      
      dispatch(addItem(product))
      setcartBtn('add to cart')
    }
  }
  return (

<>
<div className='col-md-6'>

     
<img src={product.image}  alt={product.title} height="400px" width="400px" />
</div>
<div className="col-md-6">
  <h4 className='text-uppercase text-black-50'>{product.category}</h4>
  <h1 className="display-5">{product.title}</h1>
  <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate}<AiFillStar/></p>
 <h3 className='display-6 fw-bolder my-4'>${product.price}</h3>
 <p className='lead'>{product.description}</p>
 <button className='btn btn-outline-primary' onClick={()=>addProduct(product)}>{cartBtn}</button>
 <NavLink className='btn btn-outline-primary' to='/cart'>Go to cart</NavLink>
</div>
    </>

  )
}

export default Product
