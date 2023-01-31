import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../features/products/components/ProductDetail";
import { find, findCatalog } from "../features/products/services/ProductService";

function ProductDetail() {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [catalog, setCatalog] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        try {
            const fetchProduct = async (id) => {
                const { data } = await find(id);
                setProduct(data);
                if (data.catalog_product_id) {
                    const response = await findCatalog(data.catalog_product_id);
                    setCatalog(response.data);
                }
            }

            fetchProduct(productId);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, [productId]);

    if (loading) {
        return <div>Cargando ...</div>;
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{ product.title }</li>
                </ol>
            </nav>

            <div className="row">
                <div className="col">
                    <Product product={product} catalog={catalog} />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
