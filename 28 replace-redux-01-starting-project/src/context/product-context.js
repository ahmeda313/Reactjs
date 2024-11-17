import { createContext, useState } from "react";

export const ProductContext = createContext({products:[], toggleFav:()=>{}})


export default function ProductContextProvider({children}){
    const [productList, setProductList] = useState([
        {
          id: 'p1',
          title: 'Red Scarf',
          description: 'A pretty red scarf.',
          isFavorite: false
        },
        {
          id: 'p2',
          title: 'Blue T-Shirt',
          description: 'A pretty blue t-shirt.',
          isFavorite: false
        },
        {
          id: 'p3',
          title: 'Green Trousers',
          description: 'A pair of lightly green trousers.',
          isFavorite: false
        },
        {
          id: 'p4',
          title: 'Orange Hat',
          description: 'Street style! An orange hat.',
          isFavorite: false
        }
      ])

      function toggleFavHandler(id){
        setProductList(prevProd=>{
            const itemIndex = prevProd.findIndex(i=>i.id===id)
            prevProd[itemIndex].isFavorite = !prevProd[itemIndex].isFavorite
            return [...prevProd]
        })
      }

return(
    <ProductContext.Provider value={{products:productList, toggleFav:toggleFavHandler}}>
        {children}
    </ProductContext.Provider>
    )
}