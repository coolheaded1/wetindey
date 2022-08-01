import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from "expo-status-bar";

const Tab = createMaterialTopTabNavigator();

import Entertainment from "./Entertainment";
import Science from "./Science";
import Sports from "./Sports";
import Technology from "./Technology";
import Health from "./Health";
import Business from "./Business";

export default function Screen2({ country }) {
   return (
      <View style={styles.container}>
         <StatusBar style="dark" backgroundColor="#f1f5f9" />

         <View style={styles.heading_box}>
            <View style={{ flexDirection: "row" }}>
               <View>
                  <Image
                     source={require("../assets/images/logo.png")}
                     style={styles.logo}
                  />
               </View>
               <View style={{ justifyContent: "center" }}>
                  <Text style={styles.top_news}>My News</Text>
               </View>
            </View>
         </View>
         <Tab.Navigator
            style={styles.container}
            screenOptions={{
               tabBarScrollEnabled: true,
               swipeEnabled: false,
               tabBarActiveTintColor: "#334155",
               tabBarInactiveTintColor: "#94a3b8",
               tabBarStyle: {
                  backgroundColor: "#f1f5f9",
                  borderBottomWidth: 1,
                  borderBottomColor: "#e2e8f0",
                  elevation: 0,
               },
               tabBarIndicatorStyle: {
                  borderBottomColor: "#5CD6F3",
                  borderBottomWidth: 3,
                  // width: "10%",
               },
               tabBarPressColor: "#5CD6F3",
            }}
         >
            <Tab.Screen
               name="Entertainment"
               options={{
                  tabBarLabel: () => (
                     <Text
                        style={{
                           fontSize: 15,
                           fontFamily: "Calcutta-Regular",
                           color: "#334155",
                        }}
                     >
                        Entertainment
                     </Text>
                  ),
                  tabBarItemStyle: {
                     width: 120,
                  },
               }}
               children={() => <Entertainment country={country} />}
            />
            <Tab.Screen
               name="Science"
               options={{
                  tabBarLabel: () => (
                     <Text
                        style={{
                           fontSize: 15,
                           fontFamily: "Calcutta-Regular",
                           color: "#334155",
                        }}
                     >
                        Science
                     </Text>
                  ),
                  tabBarItemStyle: {
                     width: 120,
                  },
               }}
               children={() => <Science country={country} />}
            />
            <Tab.Screen
               name="Sports"
               options={{
                  tabBarLabel: () => (
                     <Text
                        style={{
                           fontSize: 15,
                           fontFamily: "Calcutta-Regular",
                           color: "#334155",
                        }}
                     >
                        Sports
                     </Text>
                  ),
                  tabBarItemStyle: {
                     width: 120,
                  },
               }}
               children={() => <Sports country={country} />}
            />
            <Tab.Screen
               name="Technology"
               options={{
                  tabBarLabel: () => (
                     <Text
                        style={{
                           fontSize: 15,
                           fontFamily: "Calcutta-Regular",
                           color: "#334155",
                        }}
                     >
                        Technology
                     </Text>
                  ),
                  tabBarItemStyle: {
                     width: 120,
                  },
               }}
               children={() => <Technology country={country} />}
            />
            <Tab.Screen
               name="Health"
               options={{
                  tabBarLabel: () => (
                     <Text
                        style={{
                           fontSize: 15,
                           fontFamily: "Calcutta-Regular",
                           color: "#334155",
                        }}
                     >
                        Health
                     </Text>
                  ),
                  tabBarItemStyle: {
                     width: 120,
                  },
               }}
               children={() => <Health country={country} />}
            />
            <Tab.Screen
               name="Business"
               options={{
                  tabBarLabel: () => (
                     <Text
                        style={{
                           fontSize: 15,
                           fontFamily: "Calcutta-Regular",
                           color: "#334155",
                        }}
                     >
                        Business
                     </Text>
                  ),
                  tabBarItemStyle: {
                     width: 120,
                  },
               }}
               children={() => <Business country={country} />}
            />
         </Tab.Navigator>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#f1f5f9",
   },
   heading_box: {
      marginTop: 25,
      paddingVertical: 15,
      paddingHorizontal: 10,
      backgroundColor: "#f1f5f9",
   },
   logo: {
      width: 30,
      height: 30,
   },
   top_news: {
      fontSize: 20,
      paddingLeft: 10,
      fontFamily: "Calcutta-Bold",
      color: "#475569",
   },
});
