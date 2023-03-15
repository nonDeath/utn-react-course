import { Link } from "react-router-dom";

function ProductList({products}) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <h3 className="text-gray-700truncate truncate" title={product.title}>
                            <Link to={`/product/${product.id}`}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.title}
                            </Link>
                        </h3>
                        <div className="mt-4 flex justify-between">
                            <p className="mt-1 text-sm text-gray-500">Stock dispopnible ({ product.available_quantity })</p>
                            <p className="text-sm font-medium text-gray-900">$ {product.price.toLocaleString('es-AR')}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList
