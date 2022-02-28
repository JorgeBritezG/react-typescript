import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppintCart = () => {
  
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});
    
  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
      // console.log('onProductCountChange');


    setShoppingCart( oldShoppinpCart => {

        const productInCart: ProductInCart = oldShoppinpCart[product.id] || { ...product, count: 0 };

        if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
            productInCart.count += count;
            return {
                ...oldShoppinpCart,
                [product.id]: productInCart,
            }
        }

        // borrar el producto
        const { [product.id]: toDelete, ...rest } = oldShoppinpCart;
        return rest;


        // if ( count === 0 ) {
        //     const { [product.id]: toDelete, ...rest } = oldShoppinpCart;
        //     return rest;
        // }

        // return {
        //     ...oldShoppinpCart,
        //     [product.id]: { ...product, count },
        // }

    });
  }
  
  return {
    shoppingCart,
    onProductCountChange
  }
}