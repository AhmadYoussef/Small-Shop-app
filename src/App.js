import React from 'react';
import Head from './components/Head';
import ProductList from './components/ProductList';
import Cards from './components/Cards';
import './App.scss';



class App extends React.Component {

  state={
    products :[
      {id:1, img : 'https://dummyimage.com/600x400/000/fff', productTitle : 'Product 1' , ProductDescription : 'product 1 is the best product', totalItems : 0 },
      {id:2, img : 'https://dummyimage.com/600x400/000/ff0', productTitle : 'Product 2' , ProductDescription : 'product 2 is the best product', totalItems : 0  },
      {id:3, img : 'https://dummyimage.com/600x400/000/0ff', productTitle : 'Product 3' , ProductDescription : 'product 3 is the best product', totalItems : 0  },
      {id:4, img : 'https://dummyimage.com/600x400/000/f0f', productTitle : 'Product 4' , ProductDescription : 'product 4 is the best product', totalItems : 0  },
      {id:5, img : 'https://dummyimage.com/600x400/000/f0f', productTitle : 'Product 5' , ProductDescription : 'product 5 is the best product', totalItems : 0  },
    ],
    productsList :[ ],
    isBasketShow : false,
  }
  totalOfCardItems = () =>{
    let items = 0;
    this.state.productsList.map((value)=> items += value.totalItems)
    return items;
  }
  showBasket = () =>{
    this.setState({isBasketShow : !this.state.isBasketShow});
  }
  updateProductCardList = product =>{
    let productsList = this.state.productsList;
    let index = productsList.findIndex(item=> item.id===product.id);
    if(index === -1){
      product.totalItems++;
      productsList.push(product);
    }else{
      productsList[index].totalItems++;
    }
    // search if it existed in the arrays if yes increase totalItems
    this.setState({productsList},()=>{console.log(this.state.productsList)});
  }
  increaseDecrease = (idProduct, e)=>{
    let productsList = this.state.productsList;
    let index = productsList.findIndex(item => item.id=== idProduct);
    productsList[index].totalItems += (e.target.value*1);
    if(productsList[index].totalItems === 0){
      productsList.splice(index,1);
    }
    this.setState({productsList});
  }

  render(){
    return (
      <div className="App">
          <Head totalItems ={this.totalOfCardItems} showBasket={this.showBasket}/>
          <div className="container">
            {this.state.isBasketShow ? <Cards inDeItem={this.increaseDecrease} productsList={this.state.productsList} totalItems ={this.totalOfCardItems} showBasket={this.showBasket}/> : null}
            <ProductList updateProductCard={this.updateProductCardList}  products={this.state.products} />
          </div>
      </div>
    );
  }
}


export default App;
