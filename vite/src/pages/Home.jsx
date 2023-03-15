import { useEffect, useState } from "react";
import ProductList from '../features/products/components/ProductList';
import { get } from "../features/products/services/ProductService";

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
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

        setLoading(false);
    }, []);

    if (loading) {
        return (<div className="-mt-4 text-center">Cargando...</div>);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Listado de Productos</h1>
            <ProductList products={products} />
        </div>
    );
}

export default Home;
