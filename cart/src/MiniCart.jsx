import React, { useState, useEffect } from 'react'
import { useLoggedIn } from './cart';
import { clearCart, cart } from "./cart";
import { currency } from "home/products"

export default function MiniCart() {
    const [items, setItems] = useState(undefined)
    const [showCart, setShowCart] = useState(undefined)
    const loggedIn = useLoggedIn();
    useEffect(() => {
        setItems(cart.value?.cartItems);
        cart.subscribe(cart => setItems(cart?.cartItems))
    }, [])

    return (
        <>{loggedIn &&
            <>
                <button className="bg-blue-900 text-white py-2 px-5 mx-2 rounded-md" onClick={() => setShowCart(!showCart)}>
                    Cart {items?.length}
                </button>
                {showCart && (
                    <div
                        className="absolute p-5 border-4 border-blue-800 bg-white rounded-lg text-black"
                        style={{ width: 300, top: "3.3rem", left: -170 }}
                    >
                        <div
                            className='grid gap-3 text-sm'
                            style={{
                                gridTemplateColumns: "1fr 3fr 10fr 2fr"
                            }}
                        >
                            {items.map(item => {
                                return <React.Fragment key={item.id}>
                                    <div>{item.quantity}</div>
                                    <img src={item.image} alt={item.name} className='max-h-6' />
                                    <div>{item.name}</div>
                                    <div className="text-right">{currency.format(item.quantity * item.price)}</div>
                                </React.Fragment>
                            })}
                            <div></div>
                            <div></div>
                            <div></div>
                            <div>{
                                currency.format(
                                    items.reduce((a, v) => a + v.quantity * v.price, 0))
                            }</div>
                        </div>
                        <br />
                        <div className="flex">
                            <div className="flex-grow">
                                <button
                                    id='clearCart'
                                    className='bg-white text-sm border border-green-800 text-greem-800 py-2 px-5 rounded-md'
                                    onClick={clearCart}
                                >
                                    Clear Cart
                                </button>
                            </div>
                            <div className="flex-grow">
                                <button
                                    id='clearCart'
                                    className='text-sm bg-green-800 text-white py-2 px-5 rounded-md'
                                    onClick={clearCart}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )
                }
            </>
        }
        </>
    )
}