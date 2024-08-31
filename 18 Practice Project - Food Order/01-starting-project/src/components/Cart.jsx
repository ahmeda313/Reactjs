import { useContext } from 'react'
import { CartContext } from '../store/cart-context'
import { UserProgressContext } from '../store/user-progress-context'
import { Modal } from './Modal'

export const Cart = () => {
    const {items, updateCart} = useContext(CartContext)
    const {progress, hideModal, showCheckout} = useContext(UserProgressContext)

    const totPrice = items.reduce((acc,i)=>{
        return acc+(i.price)*i.quantity
    },0)


  return (
<Modal open={progress==="cart"}>
    <div className="cart">
        <h2>Cart</h2>
        <ul>
            {items.map((i,index)=>{
                return(
                <li className="cart-item" key={index}>
                    <p>{i.name}</p>
                    <div className="cart-item-actions">
                        <button onClick={()=>updateCart(i.name,-1)}>-</button>
                        <p>{i.quantity}</p>
                        <button onClick={()=>updateCart(i.name,1)}>+</button>
                    </div>
                </li>
                )
            })}

        </ul>
        <p className="cart-total">{totPrice.toFixed(2)}$</p>
        <div className="modal-actions">
                <button className="text-button" onClick={hideModal}>cancel</button>
                {items.length>0 && <button className="button" onClick={showCheckout}>go to checkout</button>}
        </div>
    </div>
</Modal>
  )
}
