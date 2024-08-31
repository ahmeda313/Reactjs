import {CreateContext} from '../store/store-cart-context.jsx';
import { useContext } from 'react';

export default function Product({
  id,
  image,
  title,
  price,
  description
}) {

  const { addToCart} = useContext(CreateContext)
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => addToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
