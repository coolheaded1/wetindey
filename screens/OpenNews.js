import React, { useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function OpenNews({ route }) {
   const { url } = route.params;
   const [isLoading, setIsLoading] = useState(false);

   const ActivityIndicatorElement = () => {
      //making a view to show to while loading the webpage
      return <ActivityIndicator color="#334155" size="large" />;
   };

   return (
      <View style={{ flex: 1 }}>
         <WebView
            startInLoadingState={true}
            javaScriptEnabled={true}
            source={{
               uri: url,
            }}
            style={{ width: "100%", height: "100%" }}
            renderLoading={ActivityIndicatorElement}
         />
      </View>
   );
}
