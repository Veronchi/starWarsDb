import React, { Component } from "react";

export default class ItemList extends Component {
  render() {
    return (
    <ul className="item-list list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Morbi leo risus
      </li>
    </ul>
    )
  }
}