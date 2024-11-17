import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';
import { useStore } from '../hooks-store/store';
// import { ProductContext } from '../context/product-context';

const Favorites = props => {
  // const {products} = useContext(ProductContext)
  const {products} = useStore()[0]
  const favoriteProducts = products.filter(i=>i.isFavorite)
  //  useSelector(state =>state.shop.products.filter(p => p.isFavorite));
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
