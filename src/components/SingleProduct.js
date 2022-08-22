import './Header.css'
export default function SingleProduct({ id, product, cartarr, setCart }) {

    return (
        < div className="singleProduct">
            <img src={product.image} alt={product.title}></img>
            <div>{product.title}</div>
            <div>Price:{product.price}</div>
            {cartarr.includes(product) ?
                <button onClick={() => {
                    setCart(cartarr.filter((item) => { return item.id !== product.id }))
                }}>
                    Remove from cart
                </button> :
                <button onClick={() => {
                    setCart([...cartarr, product])
                }}>
                    add to cart
                </button>}



        </div>
    )
}