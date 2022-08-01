import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View, Text, BackHandler, StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

// tab screen
import Screen1 from "../TapScreen/Screen1";
import Screen2 from "../TapScreen/Screen2";
import Screen3 from "../TapScreen/Screen3";

// function handleBackButton() {
//    BackHandler.exitApp();
//    return true;
// }

export default function HomeScreen({
   country,
   navigation,
   setCountry,
   countryName,
   latitude,
   longitude,
   setRegion,
}) {
   useEffect(() => {
      // setData();
      return () => {};
   }, []);

   const setData = async () => {
      try {
         await AsyncStorage.setItem("country", "ng");
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <View style={{ flex: 1 }}>
         <Tab.Navigator
            initialRouteName="TopNews"
            screenOptions={{
               headerShown: false,
               tabBarActiveTintColor: "#334155",
               tabBarInactiveTintColor: "#94a3b8",
               // tabBarActiveBackgroundColor: "red",
               tabBarLabelStyle: {
                  fontSize: 12,
                  fontFamily: "Calcutta-Light",
                  paddingBottom: 10,
               },
               tabBarStyle: {
                  elevation: 0,
                  // padding: 10,
                  backgroundColor: "#fff",
                  height: 60,
               },
               tabBarShowLabel: true,
            }}
         >
            <Tab.Screen
               name="TopNews"
               children={() => (
                  <Screen1
                     country={country}
                     navigation={navigation}
                     setCountry={setCountry}
                  />
               )}
               options={{
                  tabBarLabel: "Top News",

                  tabBarIcon: ({ color, focused }) =>
                     focused ? (
                        <View
                           style={{
                              borderTopWidth: 3,
                              borderTopColor: "#5CD6F3",
                              // borderRadius: 100,

                              padding: 5,
                              position: "absolute",
                              top: 0,
                              width: width / 4,
                              alignItems: "center",
                           }}
                        >
                           <Ionicons
                              name="newspaper-sharp"
                              size={20}
                              color={color}
                           />
                        </View>
                     ) : (
                        <View>
                           <Ionicons
                              name="newspaper-sharp"
                              size={20}
                              color={color}
                           />
                        </View>
                     ),
               }}
               // listeners={{
               //    focus: () =>
               //       BackHandler.addEventListener(
               //          "hardwareBackPress",
               //          handleBackButton
               //       ),
               //    blur: () =>
               //       BackHandler.removeEventListener(
               //          "hardwareBackPress",
               //          handleBackButton
               //       ),
               // }}
            />
            <Tab.Screen
               name="MyNews"
               children={() => (
                  <Screen2
                     country={country}
                     navigation={navigation}
                     setCountry={setCountry}
                  />
               )}
               options={{
                  tabBarLabel: "My News",
                  tabBarIcon: ({ color, focused }) =>
                     focused ? (
                        <View
                           style={{
                              borderTopWidth: 3,
                              borderTopColor: "#5CD6F3",
                              // borderRadius: 100,
                              padding: 5,
                              position: "absolute",
                              top: 0,
                              width: width / 4,
                              alignItems: "center",
                           }}
                        >
                           <Entypo name="news" size={20} color={color} />
                        </View>
                     ) : (
                        <View>
                           <Entypo name="news" size={20} color={color} />
                        </View>
                     ),
               }}
            />
            <Tab.Screen
               name="Local"
               children={() => (
                  <Screen3
                     country={country}
                     navigation={navigation}
                     setCountry={setCountry}
                     countryName={countryName}
                     latitude={latitude}
                     longitude={longitude}
                     setRegion={setRegion}
                  />
               )}
               options={{
                  tabBarLabel: "Local",
                  tabBarIcon: ({ color, focused }) =>
                     focused ? (
                        <View
                           style={{
                              borderTopWidth: 3,
                              borderTopColor: "#5CD6F3",
                              // borderRadius: 100,

                              padding: 5,
                              position: "absolute",
                              top: 0,
                              width: width / 4,
                              alignItems: "center",
                           }}
                        >
                           <FontAwesome
                              name="map-marker"
                              size={20}
                              color={color}
                           />
                        </View>
                     ) : (
                        <View>
                           <FontAwesome
                              name="map-marker"
                              size={20}
                              color={color}
                           />
                        </View>
                     ),
               }}
            />
         </Tab.Navigator>
      </View>
   );
}

const styles = StyleSheet.create({
   tabStyle: {
      backgroundColor: "#f1f5f9",
      // position: "absolute",
      // elevation: 50,
   },
});
