import { useProduct } from "@/providers/CartProviders";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Platform, Pressable, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const AddItemModal = () => {
  const { items, addItem } = useProduct();
  const [text, setText] = React.useState("");
  const onAdd = () => {
    addItem(text);
  };
  return (
    <View
      style={{
        margin: 100,
        padding: 10,
        flex: 1,
        backgroundColor: "white",
        maxHeight: 200,
        borderRadius: 10
      }}
    >
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      {/* <Text>{name}</Text> */}

      {/* <Pressable onPress={() => router.push("/menu/")}>
        <Text>close</Text>
      </Pressable> */}
      <TextInput
        label="PIzza Name"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button onPress={onAdd}>Add</Button>
    </View>
  );
};

export default AddItemModal;
