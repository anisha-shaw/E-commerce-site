import React from 'react'
import './OrderScreen.css'
import { useLocation } from 'react-router-dom'

const OrderScreen = () => {
  const location = useLocation()
  return (

    <div className='orders'>
      <div>
        <h3>Your Orders</h3>
        {location.state.orders.map((orders) => (
          <div>
            <div className='orderContainer'>
              <img src={orders.image} style={{ width: 140, height: 140 }} alt="" />
              <div className='orderDescription'>
                <p style={{marginTop:8}}>{orders.title}</p>
                <p style={{marginTop:8}}>{orders.description.length > 80 ? orders.description.substr(0, 80) : orders.description}</p>
                <p style={{marginTop:8}}>{orders.price * orders.quantity}</p>
              </div>

              <div className='orderBtns'>
                <button className='orderEBtn'>Return products</button>
                <button className='orderEBtn'>Download invoice</button>
                <button className='orderEBtn'>Rate product</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderScreen
