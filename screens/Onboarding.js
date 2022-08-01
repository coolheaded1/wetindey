import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import OnboardingAnimation from "../components/OnboardingAnimation";
import { Button } from "react-native-paper";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default class Onboarding extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <StatusBar style="dark" backgroundColor="#f1f5f9" />
            <Text style={styles.heading}>
               wetin<Text style={{ color: "#a8e4fa" }}>dey</Text>
            </Text>
            <Text style={styles.txt}>Explore trending news globally</Text>
            <View style={styles.animation}>
               <OnboardingAnimation />
               <Button
                  style={styles.button}
                  labelStyle={styles.buttontxt}
                  mode="contained"
                  icon={require("../assets/icons/right-arrow-icon.png")}
                  contentStyle={{
                     flexDirection: "row-reverse",
                  }}
                  onPress={() => this.props.navigation.navigate("HomeScreen")}
               >
                  let's go
               </Button>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#f1f5f9",
   },
   heading: {
      alignSelf: "center",
      marginTop: "40%",
      fontFamily: "Calcutta-Bold",
      textTransform: "uppercase",
      fontSize: 30,
      letterSpacing: 2,
      color: "#475569",
   },
   txt: {
      marginTop: 20,
      textAlign: "center",
      fontSize: 15,
      fontFamily: "Calcutta-Light",
      color: "#94a3b8",
   },
   animation: {
      position: "absolute",
      alignSelf: "center",
      bottom: "10%",
   },
   button: {
      width: "50%",
      alignSelf: "center",
      backgroundColor: "#f8fafc",
      borderWidth: 0,
      borderRadius: 10,
      elevation: 100,
   },
   buttontxt: {
      padding: 10,
      color: "#475569",
      letterSpacing: 0,
      fontFamily: "Calcutta-Bold",
   },
   arrow: {
      justifyContent: "center",
      borderWidth: 3,
   },
});
