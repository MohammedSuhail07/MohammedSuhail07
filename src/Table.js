import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.FirstName}</td>
                  <td>{item.LastName}</td>
                  <td>{item.Age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;