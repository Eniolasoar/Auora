import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React from "react";
import { useGlobalContext } from "../../context/GlobalProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { useState } from "react";

const Home = () => {
  const { user, isLoggedin } = useGlobalContext();
  console.log("User:", user);
  console.log("Logged", isLoggedin);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh= async ()=>{
    setRefreshing(true);
    setRefreshing(false)
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
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

              <Trending post={[{id:1},{id:2},{id:3}] ?? []}/>
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
