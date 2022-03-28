import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineLogin } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbar() {
  const state = useSelector((state) => state.handleCart)
  console.log(state.length);
  console.log(state)
  return (
    <div className='nav123 '>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2" >
        <div className="container-fluid">
          <NavLink to='/'>
          <img src="/assests/Logo.png" alt='logo' width='70px' height='60px' className='mx-4' />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              
              {/* <li className="nav-item fw-bold">
                <NavLink className="nav-link" to="/home">HOME</NavLink>
              </li> */}
              <li className="nav-item fw-bold">
                <NavLink className="nav-link" to="/products">MEN <span class="sr-only"></span></NavLink>
              </li>
              <li className="nav-item fw-bold">
                <NavLink className="nav-link" to="/women">WOMEN</NavLink>
              </li>
              <li className="nav-item fw-bold">
                <NavLink className="nav-link" to="/kids">KIDS</NavLink>
              </li>
              <li className="nav-item fw-bold">
                <NavLink className="nav-link" to="/beauty">BEAUTY</NavLink>
              </li>
            </ul>

            <div className='buttons text-align-right'></div>
            <NavLink className="btn btn-outline-none" to="/login">LOGIN</NavLink>
            <NavLink className="btn btn-outline-none" to="/register">REGISTER</NavLink>
            <NavLink className="btn btn-outline-none" to="/cart">CART</NavLink>


          </div>


        </div>
      </nav>
    </div>
  )
}

export default Navbar
