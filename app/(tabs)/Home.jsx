import { View, Text, FlatList, Image, RefreshControl, Alert } from "react-native";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { useState } from "react";
import { getAllPosts } from "../../lib/appwrite";
import { videos } from "../../dummies/Videos";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const [data, setData] = useState(videos);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch("./data.json");
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       Alert.alert("Error", error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  
  //   fetchData();
  // }, []);

  console.log(data);



  const { user, isLoggedin } = useGlobalContext();
  console.log("User:", user);
  console.log("Logged", isLoggedin);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh= async ()=>{
    setRefreshing(true);
    console.log('I am refreshing');
    Updates.reloadAsync();
    setRefreshing(false)
  }

const latestPosts=[...data].sort((a,b)=>a.updateOrder - b.updateOrder);
console.log(latestPosts);
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // <Text className="text-3xl text-white">{item.title}</Text>
          <VideoCard video={item}/>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between flex-row mb-6 items-start">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="font-semimedium text-2xl text-white">
                  EniDev
                </Text>
              </View>

              <View className="mt-1.5">
                <Image source={images.logoSmall} className="w-9 h-10" resizeMethod="contain" />
              </View>
            </View>

            <SearchInput placeholder="Search for a video topic"/>

            <View className="w-full flex-1 pt-5 pd-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Trending Videos
              </Text>

              <Trending posts={latestPosts ?? []}/>
            </View>
          </View>
        )}

        ListEmptyComponent={()=>(
          <EmptyState title="No Video Found" subTitle="Be The First To Upload a Video"/>
  )}

  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  );
};

export default Home;
