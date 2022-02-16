import React, { Component } from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h1>Customer Page:</h1> <br/><br/>  
        <form onSubmit={this.props.handleFormSubmit}>    
          <label htmlFor="FirstName"><p>
          FirstName:
          <input id="FirstName" value={this.props.newFirstName} 
            type="text" required maxLength={10} onInput={this.maxLengthCheck} name="FirstName"
            onChange={this.props.handleInputChange} /></p>
          </label><br/><br/>
          <label for="LastName"><p>
          LastName:
          <input id="LastName" value={this.props.newLastName} 
            type="text" required maxLength={10} onInput={this.maxLengthCheck} name="LastName"
            onChange={this.props.handleInputChange} /></p>
          </label><br/><br/>
          <label for="Age"><p>
          Age :    
          <input id="Age" value={this.props.newAge} 
            type="number" required min="1" max="100" name="Age"
            onChange={this.props.handleInputChange} /></p>
          </label><br/><br/>
          
          <button className="button" type="submit" value="Submit">Add Item</button> &nbsp;&nbsp;&nbsp;
          <button className="button" type="reset"  value="reset"onClick={this.props.resetForm}>Reset </button><br/><br/>
        </form>
      </div>
    );
  }
}

export default Form;