import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";
import './item-details.css'

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
    const { itemId, getData, getImgUrl} = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        console.log(item)
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


    const hasDate = !(loading || error);
    const content = hasDate ? <ItemView item={item} img={img} /> : null;
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

const ItemView = ({ item, img }) => {
  const { id, name, gender, birthYear, eyeColor } = item;

  return (
    <React.Fragment>
      <img className='item-img' src={img} alt='character' />
      <div className='card-body'>
        <h3 className='item-name'>{name}</h3>
        <ul className='item-info-list'>
          <li className='item-info-item'>
            <span>Gender: </span>
            <span>{gender}</span>
          </li>
          <li className='item-info-item'>
            <span>Birth Year: </span>
            <span>{birthYear}</span>
          </li>
          <li className='item-info-item'>
            <span>Eye Color: </span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}