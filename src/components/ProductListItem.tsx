import Colors from "@/constants/Colors";
import { Product } from "@/types";
import { FunctionComponent } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductListItem: FunctionComponent<Product> = (props) => {
  const { image, name, price } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image || ""
        }}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20
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
