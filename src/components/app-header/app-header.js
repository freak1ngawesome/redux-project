import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {connect} from 'react-redux'

const AppHeader = ({items}) => {
  let total = 0
  items.forEach(e => {
    total = total + e.price * e.count
  })
    return (
        <header className="header">
            <a className="header__link" href="#menu">
                Menu
            </a>
            <a className="header__link" href="#cart">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </a>
        </header>
    )
};

const mapStateToProps = ({items}) => {
  return {
    items
  }
}

export default connect(mapStateToProps)(AppHeader);