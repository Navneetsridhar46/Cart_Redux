import React from 'react'
import Header from '../components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../REDUX/Slices/wishlistSlice'
import { addToCart } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Wishlist() {

  const cart = useSelector(state=>state.cartReducer)
  const wishlist = useSelector(state => state.wishlistReducer) 
  const dispatch = useDispatch()

  const handleCart = (product) => {
    const existingProduct = cart?.find(item => item.id == product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      alert("Products added to your cart")
    } else {
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      toast.success("Product added to your cart")
    }
  }

  return (
    <>
      <Header />

      {wishlist?.length > 0 ?
        <Row className='container-fluid p-4 mt-5'>
          {
            wishlist?.map(product => (
              <Col className='mb-5 mt-5' sm={12} md={6} lg={4} xl={3}>
                <Card className='shadow' style={{ width: '18rem' }}>
                  <Card.Img style={{ height: '180px' }} variant="top" src={product?.thumbnail} />
                  <Card.Body>
                    <Card.Title className='text-center'>{product?.title.slice(0,20)}</Card.Title>
                    <div className='d-flex justify-content-between mt-3'>
                      <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn'><i class="fa-solid fa-heart-circle-xmark text-danger"></i></button>
                      <button onClick={()=>handleCart(product)} className='btn'><i class="fa-solid fa-cart-shopping text-success"></i></button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
        :
        <div className='container empty'>
          <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="emptyWishlistImage" />
          <h1 className='mt-3'>Your Wishlist is Empty!!</h1>
        </div>
      }
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Wishlist