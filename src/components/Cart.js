import { useState } from "react";
import CartComponent from "./CartComponent";



export default function Cart({ cartArr, setCartArr }) {
//  let [total, setTotal] =  useState([]);
// setTotal(prev=>prev = cartArr.map((item)=>item.price));
// console.log(total)
 let total = cartArr.map((item)=>item.price);
 console.log(total);
let arr =  [];
for(let i=0;i<cartArr.length;i++){
    let flag =false;
    for(let j=i-1;j>=0;j--){
        if(cartArr[j]===cartArr[i]){
            flag = true
        }
    }
    if(flag==false){
        arr.push(cartArr[i])
    }
}
console.log(arr);
 
    return (
        <>
            <h1>Cart</h1>
            <h2>
                Total price:{total.length!==0 ? total.reduce((a,b)=>a+b).toFixed(2):0 }
            </h2>
            <div className="cartList">
                {arr.map((item) => {
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