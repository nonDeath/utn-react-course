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
        return (<div className="-mt-4 text-center">Cargando...</div>);
    }

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li>
                            <div className="flex items-center">
                                <Link to="/" className="mr-2 text-sm font-medium text-gray-900">Home</Link>
                                <svg
                                    width={16}
                                    height={20}
                                    viewBox="0 0 16 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-5 w-4 text-gray-300"
                                >
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li className="text-sm">
                            <a aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.title}
                            </a>
                        </li>
                    </ol>
                </nav>

                <Product product={product} catalog={catalog} />
            </div>
        </div>
    );
}

export default ProductDetail;
