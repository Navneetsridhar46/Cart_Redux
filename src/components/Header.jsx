import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../REDUX/Slices/productSlice';

function Header({insideHome}) {

  const dispatch = useDispatch()
  const cartCount = useSelector(state=>state.cartReducer).length
  const wishlistCount = useSelector(state=>state.wishlistReducer).length

  return (
    <>
      <Navbar expand="lg" style={{ width: '100%', color: 'white',zIndex:'10' }} className="bg-info p-3 position-fixed top-0">
        <Container>
          <Navbar.Brand><Link to={'/'} style={{ textDecoration: 'none', color: "white" }}><i class="fa-solid fa-truck me-1"></i>ECART</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          { insideHome &&
            <Form style={{ marginLeft: '250px' }} className="d-flex">
            <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} className='form-control' type="text" placeholder='Search Products' />
            <Button className='ms-2' variant="outline-light">Search</Button>
          </Form>}
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className='me-5'><Link style={{ textDecoration: 'none', color: 'white' }} to={'/wishlist'}><i class="fa-solid fa-heart me-1 text-danger"></i>Wishlist<Badge className='ms-1' bg="secondary">{wishlistCount}</Badge></Link></Nav.Link>
            <Nav.Link className='me-5'><Link style={{ textDecoration: 'none', color: 'white' }} to={'/cart'}><i class="fa-solid fa-cart-shopping me-1"></i>Cart<Badge className='ms-1' bg="secondary">{cartCount}</Badge></Link></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header