import {useContext} from 'react'
import { CartContext } from '../store/cart-context.jsx'
import { currencyFormatter } from '../util/formatter.js'


export const Meal = ({mealName, image, description, price}) => {
  const { addToCart } = useContext(CartContext)
  return (
    <div className="meal-item">
        <img src={"http://localhost:3000/"+image} alt={mealName} />
        <h3>{mealName}</h3>
        <p className="meal-item-price">{currencyFormatter.format(price)}</p>
        <p className='meal-item-description'>{description}</p>
        <button className='meal-item-actions button' onClick={()=>addToCart(mealName,price)}>Add to cart</button>
    </div>
  )
}
