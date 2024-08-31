import classes from './CartButton.module.css';
import {useSelector,useDispatch} from "react-redux"
import { cartActions } from '../../store/index';

const CartButton = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state=>state.cart.items)
  
  const totalItems = cartItems.reduce((acc,i)=>acc+i.quantity,0)

  function handleToggleCart(){
    dispatch(cartActions.toggleCartModal())
  }

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
