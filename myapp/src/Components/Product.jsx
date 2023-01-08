import { useState } from 'react';

function Product() {
    const [isSold, setIsSold] = useState(false);
    const [stockUnits, setStockUnits] = useState(500);

    const handleSell = () => {
        setStockUnits(stockUnits - 1)
        setIsSold(true)
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="d-flex justify-content-between card-title mb-4">
                    <span>DDJ-FLX6-GT</span>
                    <span>$381.290,74</span>
                </h5>
                <h6 className="d-flex justify-content-between card-subtitle mb-2 text-muted">
                    4-channel DJ controller for multiple DJ applications (Graphite)
                    <span className="badge text-bg-info">SKU DDJ-FLX6-GT</span>
                </h6>
                <p className="card-text">The fresh design of the DDJ-FLX6-GT introduces a new look and feel
                    for its full-size jog wheels, which feature a graphite color plus a metallic texture on
                    top and a rubberized coating on the outer ring for improved playability. The new unit adds
                    support for VirtualDJ (license available separately), and retains free compatibility with
                    rekordbox and Serato DJ Pro. TRAKTOR PRO 3 is available to use by downloading its mapping files.
                </p>

                <p className="text-muted">Available stock ({ stockUnits } units)</p>


                {
                    (!isSold)
                        ? <button className="mb-3 btn btn-primary" title="Buy!" onClick={ () => handleSell() }>Buy!</button>
                        : <div className="alert alert-info">Thanks for your purchase!</div>
                }
            </div>
        </div>
    );
}

export default Product;
