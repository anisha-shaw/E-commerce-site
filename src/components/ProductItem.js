import React from 'react'
import './ProductItem.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/CartSlice'

const ProductItem = ({ item }) => {
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const addItemToCart = (item) => {
    dispatch(addToCart(item))
  }

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item))
  }

  return (
    <div className='productItem'>
      <img style={{ width: 200, height: 200, marginRight: 'auto', marginLeft: 'auto' }} src={item.image} alt="" />
      <p>{item?.title.length > 30 ? item.title.substr(0, 30) : item.title}</p>

      <p>{item.description.length > 60 ? item.description.substr(0, 60) : item.description}</p>
      <p>{item.price}</p>

      {cart.some((x) => x.id === item.id) ? (
        <button className='productItemBtn' onClick={() => removeItemFromCart(item)}>Remove from Cart</button>
      ) : (<button className='productItemBtn' onClick={() => addItemToCart(item)}>Add to Cart</button>
      )}

      <button className='productItemBuy'>Buy Now</button>

    </div>
  )
}

export default ProductItem
