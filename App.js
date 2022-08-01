import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MainRoute from "./routes/MainRoute";
import SubRoute from "./routes/SubRoute";

export default function App() {
   const [country, setCountry] = useState({
      code: "ng",
      name: "Nigeria",
   });

   const [region, setRegion] = useState({
      latitude: 9.082,
      longitude: 8.675,
   });

   useEffect(() => {
      // AsyncStorage.removeItem("userData");
      AsyncStorage.getItem("userData").then((value) => {
         if (value == null) {
            let user = {
               country: country.code,
               countryName: country.name,
               latitude: region.latitude,
               longitude: region.longitude,
            };
            AsyncStorage.setItem("userData", JSON.stringify(user));
         } else {
            let data = JSON.parse(value);
            setCountry({
               code: data.country,
               name: data.countryName,
            });
            // setRegion({
            //    latitude: data.latitude,
            //    longitude: data.longitude,
            // });
         }
      });
   }, []);

   LogBox.ignoreLogs([
      "ViewPropTypes will be removed",
      "ColorPropType will be removed",
      "Non-serializable values were found in the navigation state",
   ]);

   const [loaded] = useFonts({
      "Calcutta-Bold": require("./assets/fonts/Calcutta-Bold.otf"),
      "Calcutta-BoldItalic": require("./assets/fonts/Calcutta-BoldItalic.otf"),
      "Calcutta-Italic": require("./assets/fonts/Calcutta-Italic.otf"),
      "Calcutta-Light": require("./assets/fonts/Calcutta-Light.otf"),
      "Calcutta-LightItalic": require("./assets/fonts/Calcutta-LightItalic.otf"),
      "Calcutta-Medium": require("./assets/fonts/Calcutta-Medium.otf"),
      "Calcutta-Regular": require("./assets/fonts/Calcutta-Regular.otf"),
      "Calcutta-SemiBold": require("./assets/fonts/Calcutta-SemiBold.otf"),
      icomoon: require("./assets/fonts/icomoon.ttf"),
   });

   if (!loaded) {
      return null;
   }

   return (
      <View style={styles.container}>
         <StatusBar style="dark" backgroundColor="#f1f5f9" />
         <MainRoute
            country={country.code}
            countryName={country.name}
            latitude={region.latitude}
            longitude={region.longitude}
            setCountry={setCountry}
            setRegion={setRegion}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      // paddingTop: 25,
   },
});
