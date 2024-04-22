import { useProduct } from "@/providers/CartProviders";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const sizes = ["S", "M", "L", "XL"] as const;

type Sizes = (typeof sizes)[number];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { items: products } = useProduct();
  const [selectedSize, setSelectedSize] = useState<Sizes>("S");

  const product = products.find((item) => item.id.toString() === id);
  if (!product) return null;

  const onSizeSelect = (size: Sizes) => {
    setSelectedSize(size);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `${id} details`
        }}
      />
      {/* <Link href={"/add"} asChild>
        <Pressable>
          <Text>Modal</Text>
        </Pressable>
      </Link> */}
      <Image
        source={{
          uri: product.image || ""
        }}
        style={styles.image}
      />

      <Text>Select Size</Text>

      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => onSizeSelect(size)}
            key={size}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white"
              }
            ]}
          >
            <Text style={styles.sizeText}>{size}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10
  },
  sizes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  sizeText: {},
  image: {
    width: "100%",
    aspectRatio: 1
  },

  price: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ProductDetailsScreen;
