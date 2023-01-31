import ProductList from '../features/products/components/ProductList';

function Home() {
    return (
        <div className="row">
            <div className="col">
                <h1>Listado de Productos</h1>
                <ProductList />
            </div>
        </div>
    );
}

export default Home;
