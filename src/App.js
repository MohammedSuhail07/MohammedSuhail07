import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      FirstName: '',
      LastName: '',
      Age:'',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    
    let items = [...this.state.items];

    items.push({
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Age:this.state.Age
    });

    this.setState({
      items,
      FirstName: '',
      LastName: '',
      Age:''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };
  resetForm = () => {
    this.setState({FirstName:"", LastName: "",Age:""});
  }
  maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
      }
    }


  render() {
    return (
      <div className="App">
        
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          resetForm={this.resetForm}
          newFirstName={ this.state.FirstName }
          newLastName={ this.state.LastName }
          newAge={this.state.Age} />
          {this.state.items.length>0 && <>
          <Table items={ this.state.items }/></>}
          {/* {this.state.items.length<1 && <div>Add Data</div>} */}
      </div>
    );
  }
}

export default App;