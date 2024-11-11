import { useEffect, useState } from "react"
import ProductCard from '../../Molecula2/ProductCard';


const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(data=> {
            setProducts(data);
            console.log(data);
        })
        .catch(error => console.error("Error fetching products:", error)); // Agregamos un catch para errores
    }, [])
    console.log(products);
    return(
        <div>
            {products.map((product) =>
                    <div key={product.id} className="container-products">
                        <ProductCard product={product}/>
                    </div>
                )
            }
        </div>
    )
}
export default Product;