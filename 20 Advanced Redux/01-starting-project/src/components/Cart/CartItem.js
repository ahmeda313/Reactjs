import classes from './CartItem.module.css';
import { cartActions } from '../../store/index';
import {useDispatch} from "react-redux"

const CartItem = (props) => {
  const { name, quantity, price } = props.item;
  const dispatch = useDispatch()

  function incrementHandler(){
    dispatch(cartActions.addProduct(name))
  }
  function decrementHanler(){
    dispatch(cartActions.removeProduct(name))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${(price*quantity).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHanler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
