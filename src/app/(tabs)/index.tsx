import { ScrollView } from "react-native";

import products from "../../../assets/data/products";
import ProductListItem from "@/components/ProductListItem";

export default function TabOneScreen() {
  return (
    <ScrollView>
      {products.map((item) => (
        <ProductListItem key={item.id} {...item} />
      ))}
    </ScrollView>
  );
}
