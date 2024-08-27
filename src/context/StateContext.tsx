'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { ProductTypes } from '@/utils/types';

type CartContextType = {
  cardItems: (ProductTypes & { quantity: number })[]; 
  addToCard: (product: ProductTypes) => void;
  removeFromCard: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cardItems, setCardItems] = useState<(ProductTypes & { quantity: number })[]>([]);

  const addToCard = (product: ProductTypes) => {
    setCardItems(prevItems => {
      const existingProduct = prevItems.find(item => item.id === product.id);

      if (existingProduct) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCard = (id: number) => {
    setCardItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  console.log(cardItems);
  return (
    <CartContext.Provider value={{ cardItems, addToCard, removeFromCard }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCard = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
