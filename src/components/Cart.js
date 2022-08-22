import { useState } from "react";
import CartComponent from "./CartComponent";



export default function Cart({ cartArr, setCartArr }) {
//  let [total, setTotal] =  useState([]);
// setTotal(prev=>prev = cartArr.map((item)=>item.price));
// console.log(total)
 let total = cartArr.map((item)=>item.price);
 console.log(total);
    return (
        <>
            <h1>Cart</h1>
            <h2>
                Total price:{total.length!==0 ? total.reduce((a,b)=>a+b):0 }
            </h2>
            <div className="cartList">
                {cartArr.map((item) => {
                  return( <CartComponent
                        key={item.id}
                        item={item}
                        cartArr={cartArr}
                        setCartArr={setCartArr}
                    />
                    ) 
                })}
            </div>
        </>
    )
}