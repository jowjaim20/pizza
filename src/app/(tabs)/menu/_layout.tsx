import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const MenuStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "menu",
          headerRight: () => (
            <Link href="/add" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      shadowColor: "#888",
                      backgroundColor: "#999",
                      borderRadius: 50,
                      padding: 10
                    }}
                  >
                    <Text style={{ fontWeight: "800" }}>Add</Text>
                  </View>
                )}
              </Pressable>
            </Link>
          )
        }}
      />
    </Stack>
  );
};

export default MenuStack;
