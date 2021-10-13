import React from "react";
import { Component } from "react/cjs/react.production.min";

export default class ToggleBtn extends Component {

  render() {
    const {onToggle} = this.props

    return (
      <button onClick={onToggle} type="button" className="btn btn-warning">Toggle random planet</button>
    )
  }
}

