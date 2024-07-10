import React from 'react'
import './Cart.css'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { cleanCart, decrementQuantity, incrementQuantity, removeFromCart } from '../redux/CartSlice'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const total = cart.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0)
    const charges = 30;
    const navigate = useNavigate()
    const orders = [...cart] 
    const totalPrice = total + charges
    const dispatch = useDispatch()

    const incrementItemQuantity = (item) => {
        dispatch(incrementQuantity(item))
    }

    const decrementItemQuantity = (item) => {
        dispatch(decrementQuantity(item))
    }

    const removeItemFromCart = (item) => {
        dispatch(removeFromCart(item))
    }

    const placeOrder = () => {
        toast.success('Order placed!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce
        });
    }

    setTimeout(()=>{
        navigate('/orders', {
            state:{
                orders: orders,
                totalPrice: totalPrice
            }
        })
    }, 3500)

    setTimeout(()=>{
        dispatch(cleanCart())
    },4000)


    return (
        <>
            <Header />
            <div className='cart'>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"

                />
                <div className="cartLeft">
                    {cart.map((item, index) => (
                        <div className='cartContainer'>
                            <div>
                                <img src={item.image} alt="" style={{ width: 100, height: 100 }} />
                            </div>

                            <div className='cartDescription'>
                                <p>{item?.title.length > 60 ? item.title.substr(0, 60) : item.title}</p>
                                <p style={{ marginTop: 8 }}>{item.description.length > 80 ? item.description.substr(0, 80) : item.description}</p>
                                <p style={{ marginTop: 8 }}>{item.price}</p>
                            </div>

                            <div className='cartBtnContainer'>
                                <div className="cartBtns">
                                    <div style={{ cursor: 'pointer' }} onClick={() => decrementItemQuantity(item)}>-</div>
                                    <div>{item.quantity}</div>
                                    <div style={{ cursor: 'pointer' }} onClick={() => incrementItemQuantity(item)}>+</div>
                                </div>
                                <div className='cartButton' onClick={() => removeItemFromCart(item)}>Remove Item</div>
                                <h5 style={{ marginTop: 7 }}>{item.price * item.quantity}</h5>
                            </div>

                        </div>
                    ))}
                </div>



                {total === 0 ? (
                    <div>
                        <h2>Your cart is EMPTY!</h2>
                    </div>
                ) : (
                    <div className="cartRight">
                        <div className='cartRLocationContainer'>
                            <div className='cartRightLocation'>
                                <LocationOnIcon style={{ color: 'gray' }} />
                                <div className='cartRightDescription'>
                                    <p className='cartRText'>Select your Location</p>
                                    <p className='cartRText'>Please select a location, so we can find you!</p>
                                    <button className='cartRBtn'>Select Location</button>
                                </div>
                            </div>

                            <div className='cartRightLocation'>
                                <LocationOnIcon style={{ color: 'gray' }} />
                                <div className='cartRightDescription'>
                                    <p className='cartRText'>Choose your saved location</p>
                                    <button className='cartRBtn'>Choose Location</button>
                                </div>
                            </div>
                        </div>


                        <div className='cartRCoupon'>
                            <ConfirmationNumberIcon style={{ color: 'gray' }} />
                            <div style={{ marginLeft: 10 }}>
                                <h4 className='cartRCouponText'>Select / Apply Coupon</h4>
                                <p>Apply Coupons</p>
                            </div>
                        </div>


                        <div className="cartRCheckout">
                            <div className='cartRCheckoutPart'>
                                <h5>Total price</h5>
                                <h5>{total}</h5>
                            </div>

                            <div className='cartRCheckoutPart'>
                                <h5>Discount</h5>
                                <h5>-</h5>
                            </div>

                            <div className='cartRCheckoutPart'>
                                <h5>Charges</h5>
                                <h5>{charges}</h5>
                            </div>

                            <div className='cartRCheckoutPart'>
                                <h3>Grand total</h3>
                                <h3>{total + charges}</h3>
                            </div>
                        </div>

                        <button onClick={placeOrder} className="cartRCheckoutBtn">Please order</button>
                    </div>

                )}


            </div>
        </>
    )
}

export default Cart
