// PricingContext.js
import React, { createContext, useContext, useState } from 'react';
import { pricingData } from '@/components/data';

const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const [pricingStates, setPricingStates] = useState({ cart: {}, isLoading: {} });

  const findSelectedPricingItem = (id) => {
    const selectedItem = pricingData?.find((item) => item.id === id);
    return selectedItem || null;
  };

  const handlePricing = (id) => {
    setPricingStates((prevStates) => {
      const isLoading = { ...prevStates.isLoading, [id]: true };
      setTimeout(() => {
        setPricingStates((prevStates) => {
          const selectedItem = findSelectedPricingItem(id);
          if (selectedItem) {
            const cartItem = {
              pricing_ID: selectedItem.id,
              title: selectedItem.title,
              price: selectedItem.price,
              quantity: 1,
            };
            const cart = { ...prevStates.cart, [id]: cartItem };
            const isLoading = { ...prevStates.isLoading, [id]: false };
            return { cart, isLoading };
          }

          console.error('Selected item not found');
          return prevStates;
        });
      }, 2000);

      return { ...prevStates, isLoading };
    });
  };

  const isLoading = (pricingId) => pricingStates.isLoading?.[pricingId] || false;
  const cart = (pricingId) => pricingStates.cart?.[pricingId] || false;
  const cartItems = Object.values(pricingStates.cart);

  const contextValue = {
    handlePricing,
    isLoading,
    cart,
    cartItems,
  };

  return <PricingContext.Provider value={contextValue}>{children}</PricingContext.Provider>;
};

export const usePricing = () => {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return context;
};
