import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppintCart = () => {
  
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});
    
  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
      // console.log('onProductCountChange');

    setShoppingCart( oldShoppinpCart => {

        if ( count === 0 ) {
            const { [product.id]: toDelete, ...rest } = oldShoppinpCart;
            return rest;
        }

        return {
            ...oldShoppinpCart,
            [product.id]: { ...product, count },
        }

    });
  }
  
  return {
    shoppingCart,
    onProductCountChange
  }
}