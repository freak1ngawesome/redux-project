import React from 'react';
import {connect} from 'react-redux'
import './cart-table.scss';
import {deleteFromCart} from '../../actions/'

const CartTable = ({items,deleteFromCart}) => {
    return (
      <>
            <div className="cart__title" id='cart'>Ваш заказ:</div>
            <div className="cart__list">
              {
                
                items.map((item,index,arr) => {
                  const {title,price,url,id,count} = item
                  return(
                    <div className="cart__item" key={id}>
                    <img src={url} className="cart__item-img" alt={title}></img>
                    <div className="cart__item-title">{title}</div>
                    <div className="cart__item-price">{price}$</div>
                    <div className="cart__item-count">Кол-во: {count}</div>
                    <div className="cart__close" onClick={() => deleteFromCart(id)}>&times;</div>
                </div>
                  )
                })
              }
            </div>
      </>
    );
};

const mapStateToProps = ({items}) => {
  return {
    items
  }
}

const mapDispatchToProps = {
  deleteFromCart
}


export default connect(mapStateToProps,mapDispatchToProps)(CartTable);