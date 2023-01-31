import { Link } from "react-router-dom";

function Product({id, title, currency, price, availableQuantity, thumbnail}) {
    return (
        <div className="card h-100">
            <div className="overflow-hidden w-100 h-50">
                <img src={thumbnail} className="w-100" alt={title} />
            </div>

            <div className="card-body">
                <h5 className="d-flex justify-content-between card-title">
                    <span>{title}</span>
                    <span>{currency} {price.toLocaleString('es-AR')}</span>
                </h5>
                <p className="card-text">Stock dispopnible ({ availableQuantity })</p>
                <Link to={`/product/${id}`} className="btn btn-primary">Ver detalle</Link>
            </div>
        </div>
    );
}

export default Product;
