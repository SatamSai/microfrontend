import { render } from "solid-js/web";
import AddToCart from "addtocart/AddToCart";

export default function placeToAddCart(element,id){
    render(() => <AddToCart id={id}/>,element)
}

