import React from 'react';
import './Head.scss';

const Head = props=>{
    return(
        <header>
            <div className="logo">
                Best Market
            </div>
            <button onClick={props.showBasket}>
                <span>{props.totalItems()===0? null:<span>{props.totalItems()}</span>}</span>
                Card Box
            </button>
        </header>
    );

}

export default Head;