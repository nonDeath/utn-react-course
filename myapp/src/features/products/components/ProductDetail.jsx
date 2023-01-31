import { useEffect, useState } from "react";
import { get } from "../services/ProductService";
import Product from "./Product";
import { Link } from "react-router-dom";

function ProductDetail({product, catalog}) {


    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <div className="h-100 p-5 text-white bg-dark rounded-3">
                        <h2>{ product.title }</h2>
                        <hr />
                        <h5>{ catalog.family_name }</h5>

                        <img src="" alt="" />
                        <p>{catalog.short_description?.content}</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="h-100 p-5 bg-light border rounded-3 d-flex flex-column">
                        <h2>{product.currency_id} { product.price?.toLocaleString('es-AR') }</h2>
                        <p className="text-muted">{ product.warranty }</p>
                        <button className="btn btn-primary w-100 mt-auto" type="button">Comprar ahora!</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ProductDetail;
