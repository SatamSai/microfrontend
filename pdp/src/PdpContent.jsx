import { useEffect, useState, useRef } from "react"

import { useParams } from "react-router-dom"

import { getProductById, currency } from "home/products"
import placeToAddCart from "addtocart/placeAddToCart"

export default function PdpContent() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        getProductById(id).then(setProduct)
    }, [])

    const addToCart = useRef(null)
    useEffect(() => {
        if (addToCart.current && product.id) {
            placeToAddCart(addToCart.current, product.id)
        }
    }, [product])


    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <img src={product.image} alt={product.name} />
            </div>
            <div>
                <div className="flex">
                    <h1 className="font-bold text-3xl flex-grow">
                        {product.name}
                    </h1>
                    <div className="font-bold text-3xl flex-grow">
                        {currency.format(product.price)}
                    </div>
                </div>
                <div ref={addToCart}></div>
                <div className="mt-10">{product.description}</div>
                <div className="mt-10">{product.longDescription}</div>
            </div>
        </div>
    )
}