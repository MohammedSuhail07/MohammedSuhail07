import React, { Component } from 'react';

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Customer Page:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="FirstName">
          FirstName:
          <input id="FirstName" value={this.props.newFirstName} 
            type="text" maxLength={10} onInput={this.maxLengthCheck} name="FirstName"
            onChange={this.props.handleInputChange} />
          </label><br/>
          <label for="LastName">
          LastName:
          <input id="LastName" value={this.props.newLastName} 
            type="text" maxLength={10} onInput={this.maxLengthCheck} name="LastName"
            onChange={this.props.handleInputChange} />
          </label><br/>
          <label for="Age">
          Age :    
          <input id="Age" value={this.props.newAge} 
            type="number"  name="Age"
            onChange={this.props.handleInputChange} />
          </label><br/>
          <button type="submit" value="Submit">Add Item</button>
          <button type="reset"  value="reset"onClick={this.props.resetForm}>Reset </button>
        </form>
      </div>
    );
  }
}

export default Form;