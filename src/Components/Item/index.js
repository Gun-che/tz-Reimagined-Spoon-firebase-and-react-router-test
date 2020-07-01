import React from 'react';
import s from './Item.module.scss';


function Item(props) {
 
  return (
    <div className={s.item}>
      <h2>{props.obj.name}</h2>
      <img src={props.obj.img} alt="" />
      <p>${props.obj.price}</p>
    </div>
  )
}

export default Item;
