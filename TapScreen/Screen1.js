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
import { StatusBar } from "expo-status-bar";

import SkeletonContent from "react-native-skeleton-content-nonexpo";
import LottieView from "lottie-react-native";
import { WebView } from "react-native-webview";
// import { RefreshControl } from 'react-native-web-refresh-control'
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = request.topHeadlines;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
let pageSize = 10;

export default function Screen1({ navigation, country }) {
   const [isLoading, setIsLoading] = useState(false);
   const [isLoading2, setIsLoading2] = useState(false);
   const [headlines, setHeadlines] = useState([]);
   const [refreshing, setRefreshing] = useState(false);
   const [bookmarked, setBookmarked] = useState([]);

   // const [country, setCountry] = useState(false);

   // let animation = React.createRef();

   useEffect(() => {
      let isMounted = true;

      if (isMounted) {
         getTopHeadlines();
         // getData();
         // AsyncStorage.removeItem("bookmark");
         // animation.current.play();
      }

      return () => {
         isMounted = false;
      };
   }, [country]);

   const getData = async () => {
      try {
         const value = await AsyncStorage.getItem("bookmark");
         if (value !== null) {
            // value previously stored
            // setCountry(value);
            console.log(value);
         }
      } catch (e) {
         // error reading value
      }
   };

   const truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
   };

   const getTopHeadlines = async () => {
      setIsLoading(true);
      try {
         const data = await axios.get(
            `${URL}&country=${
               country ? country : "ng"
            }&pageSize=${pageSize}&page=1&category=general`
         );
         if (data.status == 200) {
            setHeadlines(data.data.articles);
         }
         setIsLoading(false);
      } catch (error) {
         setIsLoading(false);
         if (error.response) {
            console.log(error.response.data);
         } else if (error.request) {
            console.log(error.request);
         } else {
            console.log("Error", error.message);
         }
      }
   };

   const getTopHeadlinesPullToRefresh = async () => {
      setRefreshing(true);
      try {
         const data = await axios.get(
            `${URL}&country=${
               country ? country : "ng"
            }&pageSize=${pageSize}&page=1&category=general`
         );
         if (data.status == 200) {
            setHeadlines(data.data.articles);
         }
         setRefreshing(false);
      } catch (error) {
         setRefreshing(false);
         if (error.response) {
            console.log(error.response.data);
         } else if (error.request) {
            console.log(error.request);
         } else {
            console.log("Error", error.message);
         }
      }
   };

   const getMoreTopHeadlines = async () => {
      // console.log(pageSize++);
      setIsLoading2(true);
      try {
         const data = await axios.get(
            `${URL}&country=${
               country ? country : "ng"
            }&pageSize=${pageSize++}&page=1&category=general`
         );
         if (data.status == 200) {
            setHeadlines(data.data.articles);
         }
         setIsLoading2(false);
      } catch (error) {
         setIsLoading2(false);
         if (error.response) {
            console.log(error.response.data);
         } else if (error.request) {
            console.log(error.request);
         } else {
            console.log("Error", error.message);
         }
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

   const bookmark = async (id, title, urlToImage, description, url) => {
      let obj = {
         id: id,
         title: title,
         urlToImage: urlToImage,
         description: description,
         url: url,
      };
      const arr = [];
      try {
         // setBookmarked([]);
         console.log(bookmarked);
         // bookmarked.map((item, index) => {
         //    return item !== "" && item.id !== id
         //       ? bookmarked.push(obj)
         //       : console.log("bookmarked already");
         // });
         let data = bookmarked
            .filter((item) => item.id === id)
            .map(({ id, title, urlToImage }) =>
               ({ id } ? console.log("bookmarked") : bookmarked.push(obj))
            );

         // if (bookmarked.includes(id) === false) {
         //    bookmarked.push(id, title, urlToImage, description, url);
         //    // setBookmarked([]);

         //    const output = JSON.stringify(bookmarked);
         //    // await AsyncStorage.setItem("bookmark", output);
         //    console.log(bookmarked);
         // } else {
         //    console.log("Bookmarked already");
         // }
      } catch (error) {
         console.log(error);
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

   const ListFooterComponent = () => {
      return (
         <View>
            {isLoading2 && (
               <ActivityIndicator color={"#334155"} size={"large"} />
            )}
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
                        {truncate(item.title, 100)}
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
                              onPress={() =>
                                 bookmark(
                                    index,
                                    item.title,
                                    item.urlToImage,
                                    item.description,
                                    item.url
                                 )
                              }
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
                  <Text style={styles.top_news}>Top News</Text>
               </View>
            </View>
         </View>

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
               ListFooterComponent={ListFooterComponent}
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
               // onEndReached={getMoreTopHeadlines}
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
   image: {
      width: "100%",
      height: 250,
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
