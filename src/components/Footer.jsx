import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='container-fluid justify-content-between p-3 bg-info mt-2' style={{ display: 'flex', height: '300px' }}>
        <div className='media' style={{ width: '40%' }}>
          <h5 style={{color:'white'}}><i class="fa-solid fa-truck me-1"></i><b>E-CART</b></h5>
          <p>Designed and built with love in the world by the Botostrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0</p>
          <p>Currently v5.3.2</p>
        </div>

        <div className='links flex-column d-flex'>
          <h5 style={{color:'white'}}><b>Links</b></h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
          <Link to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}>Cart</Link>
          <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'black' }}>Wishlist</Link>
        </div>

        <div className='guides d-flex flex-column'>
          <h5 style={{color:'white'}}><b>Guides</b></h5>
          <a style={{ textDecoration: 'none', color: 'black' }} href="https://react.dev/" target=''>React JS</a>
          <a style={{ textDecoration: 'none', color: 'black' }} href="https://react-bootstrap.netlify.app/" target=''>React Bootstrap</a>
          <a style={{ textDecoration: 'none', color: 'black' }} href="https://reactrouter.com/en/main" target=''>React Routing</a>
        </div>

        <div className='contact us'>
          <h5 style={{color:'white'}}><b>Contact us</b></h5>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your email id' />
            <button className='btn btn-danger ms-2'><i style={{ height: '20px' }} class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='p-2 mt-2' style={{ alignItems: 'center', justifyContent: 'space-between', display: 'flex' }}>
            <a style={{ color: 'black' }} href=""><i style={{ height: '100px' }} class="fa-solid fa-message"></i></a>
            <a style={{ color: 'black' }} href="https://twitter.com/?lang=en"><i style={{ height: '100px' }} class="fa-brands fa-twitter"></i></a>
            <a style={{ color: 'black' }} href="https://in.linkedin.com/"><i style={{ height: '100px' }} class="fa-brands fa-linkedin"></i></a>
            <a style={{ color: 'black' }} href="https://www.instagram.com/"><i style={{ height: '100px' }} class="fa-brands fa-instagram"></i></a>
            <a style={{ color: 'black' }} href="https://github.com/"><i style={{ height: '100px' }} class="fa-brands fa-github"></i></a>
            <a style={{ color: 'black' }} href="https://www.whatsapp.com/"><i style={{ height: '100px' }} class="fa-brands fa-whatsapp"></i></a>

          </div>
        </div>
      </div>
      <p style={{color:'white'}} className='text-center bg-info '>Copyright & copy; 2024 E-CART. Built with React</p>
    </>
  )
}

export default Footer