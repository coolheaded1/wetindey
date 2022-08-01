import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Image } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// screen
import Onboarding from "../screens/Onboarding";
import HomeScreen from "../screens/HomeScreen";
import OpenNews from "../screens/OpenNews";
import Region from "../screens/Region";

const Stack = createStackNavigator();

export default function MainRoute({
   navigation,
   country,
   setCountry,
   countryName,
   latitude,
   longitude,
   setRegion,
}) {
   return (
      <NavigationContainer>
         <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{
               headerShown: false,
               headerBackTitleVisible: false,
            }}
         >
            <Stack.Screen
               name="Onboarding"
               component={Onboarding}
               // children={() => <Onboarding navigation={navigation} />}
               options={{
                  headerShown: false,
                  //   headerTintColor: "#44554E",
                  //   headerBackTitleVisible: false,
                  //   headerTitleStyle: { fontFamily: "Calcutta-SemiBold" },
               }}
            />
            <Stack.Screen
               name="HomeScreen"
               children={() => (
                  <HomeScreen
                     country={country}
                     setCountry={setCountry}
                     navigation={navigation}
                     countryName={countryName}
                     latitude={latitude}
                     longitude={longitude}
                     setRegion={setRegion}
                  />
               )}
            />
            <Stack.Screen
               name="OpenNews"
               component={OpenNews}
               options={{
                  headerShown: true,
                  title: "",
                  headerBackImage: () => (
                     <Image
                        source={require("../assets/images/logo.png")}
                        style={{ width: 30, height: 30 }}
                     />
                  ),
               }}
            />
            <Stack.Screen
               name="Region"
               component={Region}
               options={{
                  headerShown: true,
                  headerTitle: "Country",
                  headerStyle: {
                     backgroundColor: "#f1f5f9",
                  },
                  headerTitleStyle: {
                     fontSize: 20,
                     fontFamily: "Calcutta-Bold",
                     color: "#475569",
                  },
                  headerTitleContainerStyle: {
                     // borderWidth: 2,
                     marginLeft: 0,
                  },
                  headerBackImage: () => (
                     <Image
                        source={require("../assets/images/logo.png")}
                        style={{ width: 30, height: 30 }}
                     />
                  ),
               }}
               // children={() => <Region navigation={navigation} />}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
