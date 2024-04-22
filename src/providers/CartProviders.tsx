import products from "@/assets/data/products";
import { CartItem, Product } from "@/types";
import { router } from "expo-router";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type AddItem = (name: string) => void;

interface ProductsType {
  items: Product[];
  addItem: AddItem;
}
export const ProductContext = createContext<ProductsType>({
  items: [],
  addItem: () => {}
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Product[]>(products);
  const addItem: AddItem = (name: string) => {
    const newProduct: Product = {
      id: Math.ceil(Math.random() * 1000) + 1,
      image: items[0].image,
      name,
      price: 200
    };
    setItems([newProduct, ...items]);
    router.push("/menu/");
  };
  return (
    <ProductContext.Provider value={{ items, addItem }}>
      {children}
    </ProductContext.Provider>
  );
};

export default CartProvider;

export const useProduct = () => useContext(ProductContext);
