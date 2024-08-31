import {useContext} from 'react'
import logo from "../assets/logo.jpg"
import { CartContext } from '../store/cart-context.jsx'
import { UserProgressContext } from '../store/user-progress-context.jsx'

export const Header = () => {
  const {items} = useContext(CartContext)
  const {showCart} = useContext(UserProgressContext)

  const totalNumberOfItems = items.reduce((acc,i)=>{
    return acc+i.quantity
  },0)
  
  return (
    <div id="main-header">
        <div id="title">
            <h1>Al baik</h1>
            <img src={logo} alt="logo" />
        </div>
        <nav>
          <button className='text-button' onClick={showCart}>cart({totalNumberOfItems})</button>
        </nav>
    </div>
  )
}
