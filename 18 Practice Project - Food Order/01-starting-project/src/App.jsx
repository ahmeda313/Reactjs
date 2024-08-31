
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Cart } from "./components/Cart.jsx";
import { UserDetails } from "./components/UserDetails.jsx"
import { CartContextProvider } from "./store/cart-context.jsx"
import { UserProgressContextProvider } from "./store/user-progress-context.jsx";

function App() {

  return (
    <UserProgressContextProvider>
    <CartContextProvider>

      <Header />
      <Menu/>
      <Cart />
      <UserDetails/>


    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
