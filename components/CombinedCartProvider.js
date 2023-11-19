'use client'
import React, { createContext, useContext, useState } from 'react';
import shopCategoryData from '@/components/shopData';
import { pricingData } from '@/components/data';

const CombinedCartContext = createContext();

export const CombinedCartProvider = ({ children }) => {
  const [combinedCart, setCombinedCart] = useState({ cart: {}, isLoading: {} });
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [isItemDeleted, setIsItemDeleted] = useState(false);
  const [deletedItemTitle, setDeletedItemTitle] = useState("");
  const [deletedItem, setDeletedItem] = useState(null);
  const [updatedQuantities, setUpdatedQuantities] = useState({});

  const findSelectedShopItem = (categoryId, id) => {
    const categoryShopData = shopCategoryData.find((category) => category.category === categoryId);
    if (categoryShopData) {
      const categoryArrayName = `${categoryId.toLowerCase()}Products`;
      return categoryShopData[categoryArrayName]?.find((product) => product.product_ID === id);
    }
    return null;
  };

  const findSelectedPricingItem = (id) => {
    const selectedItem = pricingData?.find((item) => item.id === id);
    return selectedItem || null;
  };

  const handleCart = (id, categoryId) => {
    setCombinedCart((prevStates) => {
      const isLoading = { ...prevStates.isLoading, [id]: true };
      setTimeout(() => {
        setCombinedCart((prevStates) => {
          const selectedItem = findSelectedShopItem(categoryId, id);
          if (selectedItem) {
            const cartItem = {
              product_ID: selectedItem.product_ID,
              title: selectedItem.title,
              price: selectedItem.price,
              quantity: 1,
              category: categoryId,
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

  const handlePricing = (id, pricingCtegory) => {
    setCombinedCart((prevStates) => {
      const isLoading = { ...prevStates.isLoading, [id]: true };
      setTimeout(() => {
        setCombinedCart((prevStates) => {
          const selectedItem = findSelectedPricingItem(id);
          if (selectedItem) {
            const cartItem = {
              product_ID: selectedItem.id,
              title: selectedItem.title,
              price: selectedItem.price,
              quantity: 1,
              pricing: true
            };
            const cart = { ...prevStates.cart, [id]: cartItem };
            const isLoading = { ...prevStates.isLoading, [id]: false };
            return { cart, isLoading };
          }

          console.error('Selected pricing item not found');
          return prevStates;
        });
      }, 2000);

      return { ...prevStates, isLoading };
    });
  };

  const isLoading = (itemId) => combinedCart.isLoading?.[itemId] || false;
  const cart = (itemId) => combinedCart.cart?.[itemId] || false;
  const cartItems = Object.values(combinedCart.cart);


  const handleQuantity = (id, e) => {
    const updatedCart = {
      ...combinedCart.cart,
      [id]: {
        ...combinedCart.cart[id],
        quantity: e.target.value,
      },
    };

    setCombinedCart((prevStates) => ({
      ...prevStates,
      cart: updatedCart,
    }));
  };

  const handleDelete = (id) => {
    setCombinedCart((prevStates) => {
      const { [id]: deletedItem, ...updatedCart } = prevStates.cart;
      setDeletedItemTitle(deletedItem?.title);
      setDeletedItem(deletedItem);
      return {
        ...prevStates,
        cart: updatedCart,
      };
    });
    setIsItemDeleted(true);
  };

  const handleUndoDelete = () => {
    if (deletedItem) {
      setCombinedCart((prevStates) => ({
        ...prevStates,
        cart: { ...prevStates.cart, [deletedItem.product_ID]: deletedItem },
      }));
      setIsItemDeleted(false);
      setDeletedItem(null);
    }
  };

  const handleQuantityChange = (id, e) => {
    const value = parseInt(e.target.value, 10) || 1;

    setUpdatedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: value,
    }));
  };

  const handleUpdateCart = (updatedQuantities) => {
    const updatedCart = {};
    Object.keys(combinedCart.cart).forEach((id) => {
      const newQuantity = updatedQuantities[id] !== undefined ? updatedQuantities[id] : combinedCart.cart[id].quantity;

      updatedCart[id] = {
        ...combinedCart.cart[id],
        quantity: newQuantity,
      };
    });

    setCombinedCart((prevStates) => ({
      ...prevStates,
      cart: updatedCart,
    }));
  };

  const contextValue = {
    handleCart,
    handlePricing,
    isLoading,
    cart,
    cartItems,
    handleDelete,
    isItemDeleted,
    deletedItemTitle,
    handleUndoDelete,
    handleQuantityChange,
    currentQuantity,
    handleUpdateCart,
  };

  return <CombinedCartContext.Provider value={contextValue}>{children}</CombinedCartContext.Provider>;
};

export const useCombinedCart = () => {
  const context = useContext(CombinedCartContext);
  if (!context) {
    throw new Error('useCombinedCart must be used within a CombinedCartProvider');
  }
  return context;
};
