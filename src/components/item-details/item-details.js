import React, { Component } from "react";

import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";
import './item-details.css'

const Record = ({ item, field, label }) => {

  return (
    <li className='item-info-item'>
      <span>{label}: </span>
      <span>{item[field]}</span>
    </li>
  )
}

export { Record };

export default class ItemDetails extends Component {

  state = {
    item: {},
    img: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.personId) {
      this.updateItem();
    }
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updateItem() {
    const { itemId, getData, getImgUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          img: getImgUrl(item),
          loading: false
        });
      })
      .catch(this.onError);
  };

  render() {

    if (!this.state.item) {
      return <span>Select a person from a list</span>
    }

    const { item, img, error, loading } = this.state;
    const children = this.props.children;

    const hasDate = !(loading || error);
    const content = hasDate ? <ItemView item={item} img={img} children={children} /> : null;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div className='item-details card'>
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  };
}

const ItemView = ({ item, img, children }) => {
  const { id, name, gender, birthYear, eyeColor } = item;

  return (
    <React.Fragment>
      <img className='item-img' src={img} alt='character' />
      <div className='card-body'>
        <h3 className='item-name'>{name}</h3>
        <ul className='item-info-list'>
          {
            React.Children.map(children, (child) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
      </div>
    </React.Fragment>
  )
}