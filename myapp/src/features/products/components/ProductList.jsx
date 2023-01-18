import { useEffect, useState } from "react";
import get from "../services/ProductService";
import Product from "./Product";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            const fetchProducts = async () => {
                const { data } = await get();
                setProducts(data.results);
            }

            fetchProducts();
        } catch (error) {
            console.log(error);
        }
    }, []);


    return (
        <div>
            <h1>Listado de Productos</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(({id, title, currency_id, price, available_quantity, thumbnail}) => (
                        <div className="col">
                            <Product
                                key={id}
                                title={title}
                                currency={currency_id}
                                price={price}
                                availableQuantity={available_quantity}
                                thumbnail={thumbnail}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProductList
