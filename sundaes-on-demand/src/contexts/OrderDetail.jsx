import { createContext, useContext, useState } from 'react';
import { pricePerItem } from '../contexts/index.js';
const OrderDetails = createContext();

// create custom hook to  check whether we're in a provider
export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);
  if (!contextValue) {
    throw new Error(
      'useOrderDetails must be called from within an OrderDetailsProvider'
    );
  }
  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {}, // { Chocoate : 1, Vanillar : 2 }
    toppings: {},
  });
  function updateItemCount(itemName, newItemCount, optionType) {
    const newOptionCounts = { ...optionCounts };
    newOptionCounts[optionType][itemName] = newItemCount;
    setOptionCounts(newOptionCounts);
  }

  function resetOrder() {
    setOptionCounts({ scoops: {}, toppings: {} });
  }

  // utility function to derive totals from optionCounts state value
  function calculateTotal(optionType) {
    // get an array of counts for the option type (ex: [1,2])
    const countsArray = Object.values(optionCounts[optionType]);

    // total the values in the array of counts
    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    //multiply the total number of items by the price for this item type
    return pricePerItem[optionType] * totalCount;
  }

  const total = {
    scoops: calculateTotal('scoops'),
    toppings: calculateTotal('toppings'),
  };
  const value = { optionCounts, total, updateItemCount, resetOrder };

  return <OrderDetails.Provider value={value} {...props} />;
}
