import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from "react-redux"
import Notification from "./components/Notification"
import { sendCartData,fetchCartData } from './store/cartActions';

let initial = true

function App() {
  const show = useSelector(state=>state.cart.showCart)
  const change = useSelector(state=>state.cart.change)

  const cartItems = useSelector(state=>state.cart.items)
  const notificationStatus = useSelector(state=>state.ui.notification)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(()=>{

    if(initial){
      initial = false
      return
    }
    if(change){
      dispatch(sendCartData(cartItems))
    }


  },[cartItems,dispatch,change])


  return (
    <>
    {notificationStatus && <Notification status={notificationStatus.status} title={notificationStatus.title} message={notificationStatus.message} />}
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
