function ProductDetail({product, catalog}) {
    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
                    <h2 className="text-xl text-slate-500">{ catalog.family_name }</h2>
                    <p>{catalog.short_description?.content}</p>
                </div>

                <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Información adicional</h2>
                    <p className="text-3xl tracking-tight text-gray-900">{product.currency_id} {product.price?.toLocaleString('es-AR')}</p>
                    <p className="text-muted">{ product.warranty }</p>
                </div>
            </div>

            <div className="mx-auto max-w-2xl py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {product.pictures && product.pictures.map((picture) => (
                    <div key={picture.id} className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img
                                src={picture.secure_url}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
