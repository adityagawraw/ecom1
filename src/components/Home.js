import { useEffect, useState } from "react"
import CategoryComponent from "./CategoryComponent ";
import SingleProduct from "./SingleProduct";

export default function Home({ cartArr, setCartArr, products }) {

    let [categoryArr, setCategoryArr] = useState([]);



    return (
        <>
            <div>
                <CategoryComponent
                    categoryArr={categoryArr}
                    setCategoryArr={setCategoryArr}
                    products={products}

                />
            </div>
            <div className="container">
                {categoryArr.map((item) => {
                    return (
                        <SingleProduct
                            product={item}
                            key={item.id}
                            cartarr={cartArr}
                            setCart={setCartArr}
                        />
                    )
                })}
            </div>

        </>
    )
}
