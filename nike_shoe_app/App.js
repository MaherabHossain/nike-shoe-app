import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { AntDesign, Feather } from "@expo/vector-icons";
import { Home } from "./screens";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Nike Shoe Store",
            headerRight: () => {
              return (
                <TouchableOpacity>
                  <AntDesign name="search1" size={27} color="black" />
                </TouchableOpacity>
              );
            },
            headerLeft: () => (
              <TouchableOpacity>
                <Feather name="menu" size={27} color="black" />
              </TouchableOpacity>
            ),
            headerTintColor: "#4f4f4f",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
