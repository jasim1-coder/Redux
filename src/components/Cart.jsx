import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart,removeFromCart } from '../redux/actions/CounterActions'
function Cart() {
    const Main_Cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const products = [
        {id:1,name:"shoe",price:1200},
        {id:2,name:"boot",price:1300},
        {id:3,name:"slipper",price:1600}
    ];
  return (
    <div>
        <div>
        <h1>Home</h1>
            <ul>{products.map((product) => (
                <li key={product.id}>
                    {product.name},
                    Price:{product.price}
                    <button onClick={() => dispatch({
        type : 'ADD_TO_CART',
        payload: product,
    })}>Add to Cart</button>
                    </li>
            ))}</ul>
                    </div>
                    <div>
                        <ul>
                          {Main_Cart.map((items,index) => (
                            <li key={index}>
                                Name:{items.name},
                                Price:{items.price}
                                <div><button onClick={()=> dispatch(removeFromCart(items.id))} >Remove</button></div>
                            </li>
                            ))}

                            </ul>
                    </div>
    </div>
  )
}

export default Cart