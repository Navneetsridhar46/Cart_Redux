import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const navigate = useNavigate()
  const cartItems = useSelector(state => state.cartReducer)
  const [cartTotal, setCartTotal] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    if (cartItems?.length > 0) {
      setCartTotal(cartItems?.map(item => item.totalPrice).reduce((t1, t2) => t1 + t2))

    } else {
      setCartTotal(0)
    }
  }, [cartItems])

  const handleDecrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product.id))
    } else {
      dispatch(removeCartItem(product.id))
    }
  }

  const handleCheckout = () => {
    dispatch(emptyCart())
    toast.success("Thank you for shopping with us!!")
    setTimeout(()=>{
      navigate("/")
    },3000)
  }

  return (
    <>
      <Header />
      {
        cartItems?.length > 0 ?
          <div style={{ marginTop: '100px' }} className='container p-4'>
            <h1>Cart Summary</h1>
            <div className="row mt-3">
              <div className="col-lg-8">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>IMAGE</th>
                      <th>TITLE</th>
                      <th>QUANTITY</th>
                      <th>PRICE</th>
                      <th>...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems?.map((product, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{product.title.slice(0.19)}</td>
                          <td><img style={{ height: "50px", width: "50px" }} src={product.thumbnail} /></td>
                          <td>
                            <div className='d-flex'>
                              <button onClick={() => dispatch(handleDecrementQuantity(product))} className='btn fw-bolder'>-</button>
                              <input value={product.quantity} style={{ width: '70px' }} className='form-control text-center' type="text" placeholder='0' readOnly />
                              <button onClick={() => dispatch(incrementQuantity(product.id))} className='btn fw-bolder'>+</button>
                            </div>
                          </td>
                          <td>$ {product.totalPrice}</td>
                          <td><button onClick={() => dispatch(removeCartItem(product.id))} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <div className='float-end mt-3'>
                  <button onClick={() => dispatch(emptyCart())} className='btn btn-danger me-5'>Empty Cart</button>
                  <Link to={'/'} className='btn btn-success' style={{ textDecoration: 'none' }}>Shop More</Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className='shadow border rounded p-4'>
                  <h5>Total Product : <b className='text-success'>{cartItems?.length}</b></h5>
                  <h5> Total Amount : <b className='text-success'>{cartTotal}</b></h5>
                  <div className='d-grid mt-4'>
                    <button onClick={handleCheckout} className='btn btn-success'>Check Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div className='container cart'>
            <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="emptyCartImage" />
            <h3 className='mt-3'>Your Cart is Empty!!</h3>
          </div>
      }
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Cart