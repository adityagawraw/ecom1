export default function CategoryComponent({categoryArr, setCategoryArr, products}){
    return(
        <div>
            <button onClick={()=>{setCategoryArr(products)} }>All</button>
            <button  onClick={()=>{setCategoryArr(products.filter((item)=>{
                return item.category==="electronics"
            }))}}>Electronics</button>
            <button onClick={()=>{setCategoryArr(products.filter((item)=>{
                return item.category==="men's clothing"
            }))}}
            >Men's Clothing</button>
            <button onClick={()=>{setCategoryArr(products.filter((item)=>{
                return item.category==="women's clothing"
            }))}}
            >Women's Clothing</button>
            <button onClick={()=>{setCategoryArr(products.filter((item)=>{
                return item.category==="jewelery"
            }))}}>Jewelery</button>
        </div>

    )
}