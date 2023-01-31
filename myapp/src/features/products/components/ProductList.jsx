import { useEffect, useState } from "react";
import { get } from "../services/ProductService";
import Product from "./Product";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const fetchProducts = async () => {
                const { data } = await get();
                setProducts(data.results);
            }

            fetchProducts();
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, []);

    if (loading) {
        return <div>Cargando ...</div>;
    }

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(({id, title, currency_id, price, available_quantity, thumbnail}) => (
                        <div className="col" key={id}>
                            <Product
                                id={id}
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
