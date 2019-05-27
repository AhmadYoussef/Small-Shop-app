import React from 'react';
import Product from './Product';
import './ProductList.scss';


const ProductList = props =>{
    return (
        <div className='productList'> 
            {props.products.map(item => <Product key={item.id} {...item} updateProductCard={props.updateProductCard}/>)}
        </div>
    );
}

export default ProductList;