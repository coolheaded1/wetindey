import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import axios from "axios";

export default function Screen3({
   country,
   setCountry,
   countryName,
   latitude,
   longitude,
   setRegion,
}) {
   const navigation = useNavigation();

   useEffect(() => {
      // console.log(longitude);
   }, []);

   return (
      <SafeAreaView style={styles.container}>
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
                  <Text style={styles.top_news}>Local</Text>
               </View>
            </View>
         </View>
         <View
            style={{
               paddingHorizontal: 10,
            }}
         >
            <Text style={styles.region_txt}>
               You are currently viewing news related to the country shown here,
               you can change it if you wish to
            </Text>
            <View style={styles.flag_box}>
               <Image
                  source={{
                     uri: `https://countryflagsapi.com/png/${country}`,
                  }}
                  style={{ width: 150, height: 100 }}
               />
               <Text style={styles.heading}>{countryName}</Text>
            </View>
         </View>

         {/* <Text>{country}</Text> */}
         {/* <MapView
            region={{
               latitude: latitude,
               longitude: longitude,
               latitudeDelta: 0.04,
               longitudeDelta: 0.05,
            }}
            style={{ width: "100%", height: "100%" }}
            provider="google"
         >
            <Marker
               coordinate={{ latitude: latitude, longitude: longitude }}
               image={require("../assets/images/marker.png")}
               draggable={true}
            >
               <Callout>
                  <Text>{countryName}</Text>
               </Callout>
            </Marker>
         </MapView> */}

         <View style={styles.confirm_btn_box}>
            <Button
               style={styles.button}
               labelStyle={styles.buttontxt}
               mode="contained"
               uppercase={false}
               onPress={() =>
                  navigation.navigate("Region", {
                     country: country,
                     setCountry: setCountry,
                     countryName: countryName,
                     latitude: latitude,
                     longitude: longitude,
                     setRegion: setRegion,
                  })
               }
            >
               select country
            </Button>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#f1f5f9",
   },
   button: {
      width: "100%",
      alignSelf: "center",
      backgroundColor: "#f8fafc",
      borderWidth: 0,
      borderRadius: 10,
      elevation: 100,
      borderWidth: 1,
   },
   buttontxt: {
      padding: 10,
      color: "#475569",
      letterSpacing: 0,
      fontSize: 15,
      fontFamily: "Calcutta-Bold",
      textTransform: "capitalize",
      letterSpacing: 1,
   },
   confirm_btn_box: {
      position: "absolute",
      bottom: 20,
      width: "90%",
      alignSelf: "center",
      backgroundColor: "#f8fafc",
      borderRadius: 10,

      // paddingVertical: 10,
   },
   heading: {
      marginTop: 10,
      fontFamily: "Calcutta-Bold",
      fontSize: 20,
      color: "#475569",
      paddingHorizontal: 10,
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

   region_txt: {
      fontSize: 15,
      marginTop: 30,
      fontFamily: "Calcutta-Light",
      color: "#94a3b8",
      letterSpacing: 1,
      lineHeight: 20,
   },
   flag_box: {
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      padding: 20,
      height: 250,
      marginTop: "30%",
      backgroundColor: "#f8fafc",
      borderRadius: 50,
      borderTopRightRadius: 0,
      // elevation: 20,
   },
});
