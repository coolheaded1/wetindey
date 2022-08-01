import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
   View,
   Text,
   StyleSheet,
   SafeAreaView,
   ScrollView,
   TouchableOpacity,
} from "react-native";
import axios from "axios";
import { RadioButton, Button } from "react-native-paper";
import request from "../components/request";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = request.countries;

export default function Region({ navigation, route }) {
   const { country, setCountry, countryName, latitude, longitude, setRegion } =
      route.params;
   const [checked, setChecked] = useState(country);
   const [checked2, setChecked2] = useState(countryName);
   const [selected, setSelected] = useState(false);

   useEffect(() => {
      let isMounted = true;
      if (isMounted) {
         AsyncStorage.getItem("userData").then((value) => {
            // the string value read from AsyncStorage has been assigned to data
            // console.log(value);

            // transform it back to an object
            let data = JSON.parse(value);
            // console.log(data);

            // Decrement
            data.question_count--;
            // console.log(data);

            //save the value to AsyncStorage again
            let user = {
               country: country,
               countryName: countryName,
            };
            AsyncStorage.setItem("userData", JSON.stringify(user));
            setChecked(user.country);
            setChecked2(user.countryName);
            // console.log(data.country);
         });
      }

      return () => {
         isMounted = false;
      };
   }, []);

   // const setData = () => {
   //    try {
   //       AsyncStorage.getItem("userData").then((value) => {
   //          // the string value read from AsyncStorage has been assigned to data
   //          // console.log(value);

   //          // transform it back to an object
   //          let data = JSON.parse(value);
   //          // console.log(data);

   //          // Decrement
   //          data.question_count--;
   //          // console.log(data);

   //          //save the value to AsyncStorage again
   //          let user = {
   //             country: country,
   //          };
   //          AsyncStorage.setItem("userData", JSON.stringify(user));
   //          setChecked(user.country);
   //       });
   //    } catch (e) {
   //       console.log(e);
   //    }
   // };

   return (
      <View style={styles.container}>
         <ScrollView
            style={{
               paddingHorizontal: 15,
               // marginBottom: "20%",
            }}
            showsVerticalScrollIndicator={false}
         >
            <StatusBar style="dark" backgroundColor="#f1f5f9" />

            <View style={styles.region_box}>
               <Text style={styles.region_heading}>
                  Please select a country
               </Text>
               <Text style={styles.region_txt}>
                  This will help us display only news related to the country you
                  want
               </Text>
            </View>
            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("ng"),
                     setChecked2("Nigeria"),
                     setRegion({
                        latitude: 9.082,
                        longitude: 8.675,
                     });
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Nigeria</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="ng"
                     status={checked === "ng" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("ng"),
                           setChecked2("Nigeria"),
                           setRegion({
                              latitude: 9.082,
                              longitude: 8.675,
                           });
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("de"),
                     setChecked2("Germany"),
                     setRegion({
                        longitude: 10.4515,
                        latitude: 51.1657,
                     });
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Germany</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="de"
                     status={checked === "de" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("de"),
                           setChecked2("Germany"),
                           setRegion({
                              longitude: 10.4515,
                              latitude: 51.1657,
                           });
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("us"), setChecked2("United States");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>United States</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="us"
                     status={checked === "us" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("us"), setChecked2("United states");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("ae"), setChecked2("United Arab Emirates");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>
                        United Arab Emirates
                     </Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="ae"
                     status={checked === "ae" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("ae"), setChecked2("United Arab Emirates");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("ua"), setChecked2("Ukraine");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Ukraine</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="ua"
                     status={checked === "ua" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("ua"), setChecked2("Ukraine");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("za"), setChecked2("South Africa");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>South Africa</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="za"
                     status={checked === "za" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("za"), setChecked2("South Africa");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("nz"), setChecked2("New Zealand");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>New Zealand</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="nz"
                     status={checked === "nz" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("nz"), setChecked2("New Zealand");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("nl"), setChecked2("Netherlands");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Netherlands</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="nl"
                     status={checked === "nl" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("nl"), setChecked2("Netherlands");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("gr"), setChecked2("Greece");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Greece</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="gr"
                     status={checked === "gr" ? "checked" : "unchecked"}
                     onPress={() => setChecked("gr")}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("ca"), setChecked2("Canada");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Canada</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="ca"
                     status={checked === "ca" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("ca"), setChecked2("Canada");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("eg"), setChecked2("Egypt");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Egypt</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="eg"
                     status={checked === "eg" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("eg"), setChecked2("Egypt");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("sg"), setChecked2("Singapore");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Singapore</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="sg"
                     status={checked === "sg" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("sg"), setChecked2("Singapore");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("au"), setChecked2("Australia");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Australia</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="au"
                     status={checked === "au" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("au"), setChecked2("Australia");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("fr"), setChecked2("France");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>France</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="fr"
                     status={checked === "fr" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("fr"), setChecked2("France");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("gb"), setChecked2("United Kingdom");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>United Kingdom</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="gb"
                     status={checked === "gb" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("gb"), setChecked2("United Kingdom");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("br"), setChecked2("Brazil");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Brazil</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="br"
                     status={checked === "br" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("br"), setChecked2("Brazil");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("ro"), setChecked2("Romania");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Romania</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="ro"
                     status={checked === "ro" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("ro"), setChecked2("Romania");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("ma"), setChecked2("Morocco");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Morocco</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="ma"
                     status={checked === "ma" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("ma"), setChecked2("Morocco");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.country_box}
               activeOpacity={0.8}
               onPress={() => {
                  setChecked("ie"), setChecked2("Ireland");
               }}
            >
               <View style={{ flexDirection: "row" }}>
                  <View style={styles.contry_label}>
                     <Text style={styles.country_txt}>Ireland</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <RadioButton
                     value="ie"
                     status={checked === "ie" ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked("ie"), setChecked2("Ireland");
                     }}
                     uncheckedColor="#475569"
                     color="#475569"
                  />
               </View>
            </TouchableOpacity>

            <View style={{ marginBottom: "25%" }} />
         </ScrollView>
         <View style={styles.confirm_btn_box}>
            <Button
               style={styles.button}
               labelStyle={styles.buttontxt}
               mode="contained"
               uppercase={false}
               onPress={() => (
                  setCountry({
                     code: checked,
                     name: checked2,
                  }),
                  navigation.goBack()
               )}
            >
               confirm selection
            </Button>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#f1f5f9",
      // paddingTop: 25,
   },
   contry_label: {
      justifyContent: "center",
   },
   country_txt: {
      fontSize: 19,
      fontFamily: "Calcutta-Light",
      color: "#475569",
   },
   country_box: {
      //   borderTopWidth: 0,
      marginBottom: 10,
      borderRadius: 10,
      padding: 20,
      backgroundColor: "#f8fafc",
   },
   region_box: {
      marginTop: 20,
      marginBottom: 40,
   },
   region_heading: {
      fontSize: 20,
      fontFamily: "Calcutta-Bold",
      color: "#475569",
   },
   region_txt: {
      fontSize: 15,
      marginTop: 10,
      fontFamily: "Calcutta-Light",
      color: "#94a3b8",
      letterSpacing: 1,
      lineHeight: 20,
   },
   button: {
      width: "100%",
      alignSelf: "center",
      backgroundColor: "#475569",
      borderWidth: 0,
      borderRadius: 10,
      elevation: 100,
   },
   buttontxt: {
      padding: 10,
      color: "#fff",
      letterSpacing: 0,
      fontFamily: "Calcutta-Bold",
      fontSize: 15,
      letterSpacing: 1,
      textTransform: "capitalize",
   },
   confirm_btn_box: {
      position: "absolute",
      bottom: 20,
      width: "100%",
      alignSelf: "center",
      paddingHorizontal: 20,
      backgroundColor: "#f8fafc",
      // paddingVertical: 10,
   },
});
