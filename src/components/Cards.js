import React from 'react';
import Card from './Card';
import './Cards.scss';

const Cards = props =>{

    return(
        <div className="cards">
            <div className='cardHead'>
                <p>Basket {props.totalItems()===0? null:<span>{props.totalItems()}</span>}</p>
                <div onClick={props.showBasket}>X</div>
            </div>
            <div>
                {props.productsList.length ===0 ? <div className="empty" > There is no product </div> 
                   : props.productsList.map((item,index)=> <Card key={index}  inDeItem={props.inDeItem} {...item} />)}
            </div>
        </div>
    );
}

export default Cards;