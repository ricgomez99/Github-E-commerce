import React, { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children?: ReactNode;
};

interface AppContextInterface {
  isOpen: boolean;
  items: any[];
  openCart: any;
  closeCart: any;
  addItemToCart: any;
  getNumberOfItems: any;
}

const AppContext = createContext<AppContextInterface>({
  isOpen: false,
  items: [],
  openCart: () => {},
  closeCart: () => {},
  addItemToCart: (item: any) => {},
  getNumberOfItems: () => {},
});

export default function StateWrapper({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<any[]>([]);

  function handleOpenCart() {
    setIsOpen(true);
  }

  function handleCloseCart() {
    setIsOpen(false);
  }

  function handleAddItemToCart(item: any) {
    const temp = [...items]; //Temporal
    const found = temp.find((product: any) => product.id === item.id);

    if (found) {
      found.qty++;
    } else {
      item.qty = 1;
      temp.push(item);
    }

    setItems([...temp]);
  }

  function handleNumberOfItems() {
    const total = items.reduce((acc, item) => acc + item.qty, 0);

    return total;
  }

  return (
    <AppContext.Provider
      value={{
        isOpen,
        items,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        addItemToCart: handleAddItemToCart,
        getNumberOfItems: handleNumberOfItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
