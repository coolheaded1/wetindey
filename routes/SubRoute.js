import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

// screen
import Onboarding from "../screens/Onboarding";
import HomeScreen from "../screens/HomeScreen";
import OpenNews from "../screens/OpenNews";
import Region from "../screens/Region";

const Stack = createStackNavigator();

export default function SubRoute() {
   return (
      <Stack.Navigator initialRouteName="HomeScreen">
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
         <Stack.Screen
            name="OpenNews"
            component={OpenNews}
            options={{
               headerShown: true,
               title: "",
               headerBackImage: () => (
                  <Ionicons name="close" size={30} color="#334155" />
               ),
            }}
         />
         <Stack.Screen name="Region" component={Region} />
      </Stack.Navigator>
   );
}
