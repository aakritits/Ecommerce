import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const getCartItems = () => {
    try {
      const items = localStorage.getItem("cartItems");
      return items ? JSON.parse(items) : [];
    } catch (e) {
      console.error("Failed to parse cart items:", e);
      return [];
    }
  };

  const [cartItems, setCartItems] = useState(getCartItems());

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      let found = false;
      const updatedItems = prevItems.map((item) => {
        if (item.id === product.id) {
          found = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      if (!found) {
        return [...updatedItems, { ...product, quantity: 1 }];
      }
      return updatedItems;
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      return prevItems.reduce((acc, item) => {
        // Check if the current item is the one to be decremented
        if (item.id === product.id) {
          // If the item's quantity is more than 1, decrement it
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          // If it's not the item to update, just add it to the accumulator
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };

  const updatedCart = (product, amount) => {
    setCartItems((prevItems) => {
      return prevItems.reduce((acc, item) => {
        // Check if the current item is the one to be decremented
        if (item.id === product.id) {
          // If the item's quantity is more than 1, decrement it

          acc.push({ ...item, quantity: amount });
        } else {
          // If it's not the item to update, just add it to the accumulator
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updatedCart,
        totalAmount,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
