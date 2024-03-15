import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addWishlistItem } from '../REDUX/Slices/wishlistSlice';
import { addToCart } from '../REDUX/Slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function View() {

  const cart = useSelector(state => state.cartReducer)
  const wishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  const { id } = useParams()
  // console.log(id);

  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      // console.log(allProducts);
      setProduct(allProducts.find(item => item.id == id))
    }
  }, [])

  const handleWishlist = (product) => {
    if (wishlist?.includes(product)) {
      toast.info("Item already in wishlist")
    } else {
      dispatch(addWishlistItem(product))
    }
  }

  const handleCart = (product) => {
    const existingProduct = cart?.find(item => item.id == product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      toast.success("Products added to your cart")
    } else {
      dispatch(addToCart(product))
      toast.success("Product added to your cart")
    }
  }

  return (
    <>
      <Header />
      <div className='container view p-3'>
        <Row className='align-items-center'>
          <Col className='col-lg-1'></Col>
          <Col className='col-lg-4'>
            <Card className='shadow rounded' style={{ width: '100%' }}>
              <Card.Img style={{ height: '300px' }} variant="top" src={product?.thumbnail} />
            </Card>
          </Col>
          <Col className='col-lg-1'></Col>
          <Col className='col-lg-6 p-2'>
            <h5>PID : {product?.id}</h5>
            <h1>{product?.title}</h1>
            <h3 className='text-primary'>$ {product?.price}</h3>
            <p style={{ textAlign: 'justify' }}><b>Description :</b> {product?.description}</p>
            <div className="d-flex justify-content-between mt-4">
              <button onClick={() => handleWishlist(product)} className='btn btn-outline-dark'><i class="fa-solid fa-heart me-1 text-danger"></i><b>Add To Wishlist</b></button>
              <button onClick={() => handleCart(product)} className='btn btn-outline-success'><i class="fa-solid fa-cart-shopping me-1"></i><b>Add To Cart</b></button>
            </div>
          </Col>
        </Row>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default View