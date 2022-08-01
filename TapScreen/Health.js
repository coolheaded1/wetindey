import React, { useEffect, useState } from "react";
import {
   View,
   Text,
   StyleSheet,
   Image,
   TouchableHighlight,
   ScrollView,
   RefreshControl,
   Share,
   Dimensions,
   ActivityIndicator,
   FlatList,
} from "react-native";
import {
   MaterialCommunityIcons,
   Ionicons,
   MaterialIcons,
} from "@expo/vector-icons";
import request from "../components/request";
import axios from "axios";
import moment from "moment";
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import LottieView from "lottie-react-native";
import { WebView } from "react-native-webview";
// import { RefreshControl } from 'react-native-web-refresh-control'
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = request.topHeadlines;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Health({ navigation, country }) {
   const [isLoading, setIsLoading] = useState(false);
   const [headlines, setHeadlines] = useState([]);
   const [refreshing, setRefreshing] = useState(false);
   // const [country, setCountry] = useState(false);

   // let animation = React.createRef();

   useEffect(() => {
      let isMounted = true;

      if (isMounted) {
         getTopHeadlines();
      }

      return () => {
         isMounted = false;
      };
   }, [country]);

   const truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
   };

   const getTopHeadlines = async () => {
      setIsLoading(true);
      try {
         const data = await axios.get(
            `${URL}&country=${
               country ? country : "ng"
            }&pageSize=10&page=1&category=healthh`
         );
         if (data.status == 200) {
            setHeadlines(data.data.articles);
         }
         setIsLoading(false);
      } catch (error) {
         setIsLoading(false);
         console.log(error);
      }
   };

   const getTopHeadlinesPullToRefresh = async () => {
      setRefreshing(true);
      try {
         const data = await axios.get(
            `${URL}&country=${
               country ? country : "ng"
            }&pageSize=10&page=1&category=healthh`
         );
         if (data.status == 200) {
            setHeadlines(data.data.articles);
         }
         setRefreshing(false);
      } catch (error) {
         setRefreshing(false);
         console.log(error);
      }
   };

   const loadBrowser = async (url) => {
      let result = await WebBrowser.openBrowserAsync(url);
   };

   const onShare = async (url, title) => {
      try {
         const result = await Share.share({
            message: url,
            url: title,
            title: title,
         });
         if (result.action === Share.sharedAction) {
            if (result.activityType) {
               // shared with activity type of result.activityType
            } else {
               // shared
            }
         } else if (result.action === Share.dismissedAction) {
            // dismissed
         }
      } catch (error) {
         alert(error.message);
      }
   };

   const ListEmptyComponent = () => {
      return (
         <View style={styles.loading_animation}>
            <MaterialIcons name="error-outline" size={54} color="#94a3b8" />
            <Text style={[styles.loading_txt, { fontSize: 15 }]}>
               No record, please check back later
            </Text>
         </View>
      );
   };

   const renderItem = ({ item }) => {
      return (
         <View style={styles.box}>
            <TouchableHighlight
               style={styles.box_button}
               activeOpacity={1}
               underlayColor="#f8fafc"
               onPress={() => loadBrowser(item.url)}
            >
               <View>
                  <View style={styles.image_box}>
                     {item.urlToImage ? (
                        <Image
                           source={{
                              uri: item.urlToImage,
                           }}
                           style={styles.image}
                        />
                     ) : (
                        <Image
                           source={require("../assets/images/news.png")}
                           style={styles.image}
                        />
                     )}
                  </View>
                  <View style={{ flexDirection: "row" }}>
                     <Text style={styles.category}>
                        Source: {item.source.name}
                     </Text>
                  </View>
                  <View style={{ padding: 10 }}>
                     <Text style={styles.heading}>
                        {truncate(item.title, 50)}
                     </Text>
                     <Text style={styles.txt}>
                        {truncate(item.description, 200)}
                     </Text>
                  </View>
                  <View style={styles.bottom_box}>
                     <View style={{ flexDirection: "row" }}>
                        <View
                           style={{
                              justifyContent: "center",
                           }}
                        >
                           <Text style={styles.date}>
                              {moment(item.publishedAt).fromNow()}
                           </Text>
                        </View>
                        <View style={{ flex: 1 }} />
                        <View>
                           <TouchableHighlight
                              onPress={() => console.log("bookmark pressed")}
                              style={styles.icon_btn}
                              underlayColor="#f1f5f9"
                           >
                              <MaterialCommunityIcons
                                 name="bookmark-minus-outline"
                                 size={26}
                                 color="#94a3b8"
                              />
                           </TouchableHighlight>
                        </View>
                        <View style={{ flex: 0.2 }} />
                        <View>
                           <TouchableHighlight
                              onPress={() => onShare(item.url, item.title)}
                              style={styles.icon_btn}
                              underlayColor="#f1f5f9"
                           >
                              <Ionicons
                                 name="share-social-outline"
                                 size={26}
                                 color="#94a3b8"
                              />
                           </TouchableHighlight>
                        </View>
                     </View>
                  </View>
               </View>
            </TouchableHighlight>
         </View>
      );
   };

   return (
      <View style={{ flex: 1 }}>
         <View style={styles.container}>
            {isLoading && (
               <View style={styles.loading_animation}>
                  <ActivityIndicator color={"#334155"} size={"large"} />
                  <Text style={styles.loading_txt}>Loading...</Text>
               </View>
            )}
            <FlatList
               data={headlines}
               key={(item) => item.id}
               renderItem={renderItem}
               ListEmptyComponent={ListEmptyComponent}
               keyExtractor={(item, index) => index.toString()}
               showsVerticalScrollIndicator={false}
               refreshControl={
                  <RefreshControl
                     refreshing={refreshing}
                     onRefresh={getTopHeadlinesPullToRefresh}
                     progressBackgroundColor={"#a8e4fa"}
                     tintColor={"#a8e4fa"}
                  />
               }
               onEndReached={() => {
                  // console.log("end reached");
               }}
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 15,
      backgroundColor: "#f1f5f9",
   },
   image: {
      width: "100%",
      height: 200,
      opacity: 0.9,
      borderRadius: 10,
      borderBottomLeftRadius: 0,
   },
   image_box: {
      backgroundColor: "rgba(0,0,0,0.8)",
      borderRadius: 10,
      borderBottomLeftRadius: 0,
   },
   box: {
      marginBottom: 15,
      borderRadius: 15,
      backgroundColor: "#fff",
   },
   category: {
      color: "#475569",
      fontSize: 10,
      fontFamily: "Calcutta-Regular",
      backgroundColor: "#a8e4fa",
      textAlign: "center",
      padding: 5,
      paddingHorizontal: 20,
      borderRadius: 5,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
   },
   heading: {
      marginTop: 10,
      fontFamily: "Calcutta-Bold",
      fontSize: 20,
      color: "#475569",
   },
   txt: {
      marginTop: 10,
      fontSize: 15,
      fontFamily: "Calcutta-Light",
      color: "#94a3b8",
      letterSpacing: 1,
      lineHeight: 20,
   },
   bottom_box: {
      width: "100%",
      marginTop: 50,
      padding: 5,
      paddingHorizontal: 10,
      alignSelf: "center",
   },
   box_button: {
      padding: 5,
      borderRadius: 15,
   },
   date: {
      fontSize: 15,
      fontFamily: "Calcutta-Regular",
      color: "#94a3b8",
      letterSpacing: 1,
      lineHeight: 20,
   },
   icon_btn: {
      height: 50,
      width: 50,
      justifyContent: "center",
      borderRadius: 100,
      alignItems: "center",
      backgroundColor: "#f8fafc",
   },
   loading_animation: {
      height: windowHeight * 0.9,
      justifyContent: "center",
      alignItems: "center",
   },
   loading_txt: {
      fontSize: 20,
      // marginTop: 120,
      letterSpacing: 2,
      fontFamily: "Calcutta-Regular",
      color: "#94a3b8",
   },
});
