import React from "react";

import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default class OnboardingAnimation extends React.Component {
   render() {
      return (
         <LottieView
            style={styles.animation}
            source={require("../assets/animation/lf30_editor_l08eokvm.json")}
            autoPlay
            loop
         />
      );
   }
}

const styles = StyleSheet.create({
   animation: {
      width: 100,
      height: 400,
      alignSelf: "center",
   },
});
