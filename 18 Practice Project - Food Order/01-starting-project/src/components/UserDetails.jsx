import { useContext } from 'react'
import { CartContext } from '../store/cart-context'
import { Modal } from './Modal'
import { UserProgressContext } from '../store/user-progress-context'
import { currencyFormatter } from '../util/formatter'
import useHttp from '../hooks/useHttp'

const requestConfig = {
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
}

export const UserDetails = () => {
    const {items, clearCart} = useContext(CartContext)
    const {progress, hideModal} = useContext(UserProgressContext)
    const {data,isLoading,error,sendRequest,clearData} = useHttp("http://localhost:3000/orders",requestConfig)


    function handleSubmit(e){
        e.preventDefault()
        const fd = new FormData(e.target)
        const customerData = Object.fromEntries(fd.entries())
        if(customerData.name.trim()===""||customerData.street.trim()===""||customerData.city.trim()===""){
            console.log("please enter valid data")
            return
        }
        console.log(customerData)
        sendRequest(JSON.stringify({
            order:{
            items:items,
            customer:{...customerData}
        }}))
        
    }

    function closeSuccessModal(){
        hideModal()
        clearCart()
        clearData()
    }

    let action = (
        <>
        <button type="button" className="text-button" onClick={hideModal}>close</button>
        <button className="button" >order</button>
        </>
    )
    if(isLoading){
        action = <p>placing your order...</p>
    }

    if(data && !error){
        return(
            <Modal open={progress==="checkout"} onClose={closeSuccessModal}>
                <h2>Your order placed successfully</h2>
                <p>we will reach you out with in few minutes via mail</p>
                <div className="modal-actions">
                <button type="button" className="text-button" onClick={closeSuccessModal}>close</button>
                </div>
            </Modal>
        )
    }

    
    const totPrice = items.reduce((acc,i)=>{
        return acc+(i.price)*i.quantity
    },0)

return (
<Modal open={progress==="checkout"}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total amount: {currencyFormatter.format(totPrice)}</p>
                <p className="control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' required/>
                </p>
                <p className="control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' required/>
                </p>

            <h3>Address</h3>
            <p className="control">
                <label htmlFor="street">Street</label>
                <input type="text" id='street' name='street' required/>
            </p>

            <div className="control-row">
            <p className="control">
                <label htmlFor="city">City</label>
                <input type="text" id='city' name='city' required/>
            </p>


            <p className="control">
                <label htmlFor="postal-code">Postal code</label>
                <input type="number" id='postal-code' name='postal-code' required/>
            </p>
            </div>

            {error && <p className="center">{error}</p>}

            <div className="modal-actions">
            {action}
            </div>
        </form>
</Modal>
  )
}
