import './Header.css'
export default function SingleProduct({ id, product, cartarr, setCart }) {
let count = cartarr.filter((item)=>{
    return item.id==product.id
}).length;
    return (
        < div className="singleProduct">
            <img src={product.image} alt={product.title}></img>
            <div>{product.title}</div>
            <div>Price:{product.price}</div>
            <div>Rating:{product.rating.rate}</div>
            <button onClick={() => {
                    setCart([...cartarr, product])
                }}>
                    add to cart {count!==0? <p>({count})</p>:null}
                </button>

            {cartarr.includes(product) ?
                <button onClick={() => {
                    setCart(cartarr.filter((item) => { return item.id !== product.id }))
                }}>
                    Remove from cart
                </button> :null
                }
                


        </div>
    )
}