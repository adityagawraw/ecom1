

import './Header.css'
export default function CartComponent({ item, cartArr,setCartArr}){
    let count = cartArr.filter((element)=>{
        return element.id==item.id
    }).length;
    return (
        <div className="CartComponent">
       <img src={item.image}></img>
       <div>{item.title}</div>
       <div>{item.price}</div> 
       <div>{count!==0? <p>({count})</p>:null}</div>
        <button onClick={()=>{
          setCartArr((arr)=>{
          
           return arr.splice(arr.indexOf(item),1);
            
          })
        }}>-</button>
        
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