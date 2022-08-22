

import './Header.css'
export default function CartComponent({ item, cartArr,setCartArr}){
    return (
        <div className="CartComponent">
       <img src={item.image}></img>
       <div>{item.title}</div>
       <div>{item.price}</div> 
       
        <button onClick={()=>{
           setCartArr((p)=>{
            return p.filter((i)=>{
                return i.id!==item.id
            })
           }) 
        }}>Remove item</button>

        
        </div>
    )
}