import React from 'react';
import './Product.scss'


const Product = props =>{
    let {updateProductCard, ...newProduct} = props;
    return (
        <div className="product">
            <img src={props.img} alt="product" />
            <h2>{props.productTitle}</h2>
            <p>{props.ProductDescription}</p>
            <button onClick={()=>{props.updateProductCard(newProduct)}}>Add to Basket</button>
        </div>
    );
}
export default Product;