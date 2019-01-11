import React, { Component } from 'react';

const AddItem = (props) => {
    return (
      <div className= "container mt-4">
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="Quantity">Quantity</label>
          <input type="number" min="1" className="form-control" defaultValue="1" id="Quantity" onChange={props.handleAddQuantity}></input>
        </div>
        <div className="form-group">
          <label htmlFor="Products">Products</label>
          <select className="form-control" onChange={props.handleAddItem} id="Products" >
            {props.products.map(p => <option>{p.name}</option>)}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mb-2" >Add to Cart</button>
      </form >
      </div>
      );
}

export default AddItem;
