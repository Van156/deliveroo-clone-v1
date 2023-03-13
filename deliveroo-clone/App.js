import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import RestaurantScreen from "./src/screens/RestaurantScreen";
const Stack = createNativeStackNavigator();
import { Provider } from "react-redux";
import store from "./src/featured/store";
import PreparingOrderScreen from "./src/screens/PreparingOrderScreen";
import BasketScreen from "./src/screens/BasketScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          <Stack.Screen
            name="Restaurant"
            options={{ headerShown: false }}
            component={RestaurantScreen}
          />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
