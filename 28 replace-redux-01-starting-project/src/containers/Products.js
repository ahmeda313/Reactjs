import React from 'react';
// import { useSelector } from 'react-redux';
// import { useContext } from 'react';
// import {ProductContext} from '../context/product-context';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { useStore } from '../hooks-store/store';


const Products = props => {
  // const productList = useSelector(state => state.shop.products);
  // const {products} = useContext(ProductContext)
  const {products} = useStore()[0]
  
  
  return (
    <ul className="products-list">
      {products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
