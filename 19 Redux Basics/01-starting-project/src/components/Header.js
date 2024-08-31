import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Header = () => {
  const loggedIn = useSelector(state=>state.auth.isAuthenticated)
  const dispatchActions = useDispatch()

  function logOut(){
    dispatchActions(authActions.logOut())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {loggedIn &&(
            <>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOut}>Logout</button>
          </li>
          </>)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
