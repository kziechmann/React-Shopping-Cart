import React, { Component } from 'react';
import './App.css'
import NavBar from  './components/navbar';
import Footer from  './components/footer';
import CartItems from  './components/cartItems';
import AddItem from './components/addItem';


class App extends Component {

  state = {
    cartItems: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ],
    products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
    itemToAdd: "Mediocre Iron Watch",
    quantity: 1
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.itemToAdd === ""){return}
    let newState = { ...this.state}
    newState.cartItems.push({
        id: 4,
        product:{
        id: 43,
        name: this.state.itemToAdd,
        priceInCents: this.state.products.filter(product=> (product.name === this.state.itemToAdd))[0].priceInCents
      },
      quantity: this.state.quantity
    })
    console.log(newState)
    this.setState(newState)
  }

  handleAddItem = (event) =>{
    let newState = {...this.state}
    newState.itemToAdd = event.target.value
    this.setState(newState)
  }

  handleAddQuantity = (event) =>{
    let newState = {...this.state}
    newState.quantity = parseInt(event.target.value)
    this.setState(newState)
  }

  handleTotal = () =>{
    return (this.state.cartItems.reduce((sum,item)=> sum + item.product.priceInCents*item.quantity , 0 )/100)
  }



  render() {
    return (
      <React.Fragment>
        < NavBar />
          <div className = "container">
            < CartItems cartItems={this.state.cartItems}/>
            < AddItem products={this.state.products} handleAddItem={this.handleAddItem} handleSubmit={this.handleSubmit} handleAddQuantity={this.handleAddQuantity}/>
              <span className="ml-3 mt-auto"> Total: {`$${this.handleTotal().toFixed(2)}`} </span>
          </div>
        < Footer copyright={2019}/>
      </React.Fragment>
    );
  }
}

export default App;
