import React from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {delItem} from '../redux/action/index'

function Cart() {
    const state=useSelector((state)=>state.handleCart)
  console.log(state.length);
  console.log('<<<<<<',state)

  const handleClose =(item)=>{
      dispatch(delItem(item))
  }
    const dispatch = useDispatch()


    const cartItems = (cartItem)=>{

        return(
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
                <div className='container py-4'>
                    <button className='btn-close float-end'  onClick={()=>handleClose(cartItem)}></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.image} alt={cartItem.title} height='200px'
                            width='180px'/>
                           
                        </div>
                        <div className='col-md-4'>
                        <p className='fw-bolder'>{cartItem.title}</p>
                        <h3>${cartItem.price}</h3>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        )
    }
const emptyCart=()=>{
    return(
        <div className='px-4 my-5 bg-light rounded-3 py-5'>
            <div className='container py-4' >
                <div className='row'>
                    <h3>Your cart is empty</h3>
                </div>
            </div>
        </div>
    )
}

const button=()=>{
    return(
        <div className='container'>
            <div className='row'>
                <NavLink to="/checkout" className="btn btn-outline-primary w-25 mx-auto">Proceed to checkout</NavLink>
            </div>
        </div>
    )
}
  return (
    <div>
{state.length===0&&emptyCart()}
{state.length!==0&&state.map(cartItems)}
{state.length!==0&&button()}

    </div>
  )
}

export default Cart