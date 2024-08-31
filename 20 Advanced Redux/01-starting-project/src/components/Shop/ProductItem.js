import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useSelector,useDispatch} from "react-redux"
import { cartActions } from '../../store/index';

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state=>state.cart.items)
  const { title, price, description } = props;

  function handleAddToCart(){
    const isExists = cartItems.find(i=>i.name===title)
    let option = title
    if(!isExists){
      option = {name:title,price,description,quantity:1}
    }
    dispatch(cartActions.addProduct(option))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
