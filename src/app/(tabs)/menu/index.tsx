import { FlatList, ScrollView } from "react-native";

import products from "@/assets/data/products";
import ProductListItem from "@/components/ProductListItem";
import { useProduct } from "@/providers/CartProviders";

export default function TabOneScreen() {
  const { items } = useProduct();
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <ProductListItem {...item} />}
      numColumns={2}
      contentContainerStyle={{
        gap: 10,
        padding: 10
      }}
      columnWrapperStyle={{
        gap: 10
      }}
    />
  );
}
