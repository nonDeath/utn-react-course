import React, {Component} from "react";
import Product from '../Components/Product';

class ProductDetail extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <Product />
                </div>
            </div>
        );
    }
}

export default ProductDetail;
