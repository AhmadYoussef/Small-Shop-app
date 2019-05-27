import React from 'react';
import './Card.scss';

const Card = props =>{
    return (
        <div className="item">
            <img src={props.img} alt=""/>
            <p>{props.productTitle}</p>
            <div className="addSub">
                <button value="+1" onClick={(e)=>{props.inDeItem(props.id,e)}}>+</button>
                <p>{props.totalItems}</p>
                <button value="-1" onClick={(e)=>{props.inDeItem(props.id,e)}}>-</button>
            </div>
        </div>
    );
}

export default Card;