import React from 'react';


const ProductCard = ({ product }) => {

    return (
        <div className="card my-3 mx-auto" style={{width: '18rem'}}>
            <img src={product.thumbnail} width={200} height={200} className="card-img-top" alt="product" />
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Stock: {product.stock}</p>
            <a href="#s" className="btn btn-primary">Buy</a>
        </div>
    );
};
export default ProductCard;

