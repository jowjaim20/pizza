import Colors from "@/constants/Colors";
import { Product } from "@/types";
import { Link } from "expo-router";
import { FunctionComponent } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ProductListItem: FunctionComponent<Product> = (props) => {
  const { id, image, name, price } = props;

  return (
    <Link href={`/menu/${id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: image || ""
          }}
          resizeMode="contain"
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    maxWidth: "50%"
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold"
  },
  image: {
    width: "100%",
    aspectRatio: 1
  }
});

export default ProductListItem;
