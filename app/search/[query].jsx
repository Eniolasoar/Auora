
import { useLocalSearchParams } from 'expo-router'
import { View, Text, FlatList,SafeAreaView ,StatusBar} from "react-native";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalProvider";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { useState } from "react";
import { videos } from "../../dummies/Videos";
import VideoCard from "../../components/VideoCard";

const Search = () => {

  StatusBar.setBarStyle("light-content");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const {query}=useLocalSearchParams();

  const searchPosts=(query)=>{
const filteredVideos=videos.filter((video)=>video.title.toLowerCase().includes(query.toLowerCase()));
return filteredVideos;
  }
  useEffect(()=>{
    setData(searchPosts(query));
  },[query])

  const { user, isLoggedin } = useGlobalContext();

const latestPosts=[...data].sort((a,b)=>a.updateOrder - b.updateOrder);
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
          <View className="my-6 px-4 ">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
Search Results                </Text>
                <Text className="font-semimedium text-2xl text-white">
                  {query}
                </Text>

          <View className='mt-6 mb-8'>
          <SearchInput placeholder="Search for a video topic" initialQuery={query}/>

          </View>

              </View>


       


            
          </View>
        )}

        ListEmptyComponent={()=>(
          <EmptyState title="No Videos Found" subTitle="No videos found for this search query"/>
  )}

      />
    </SafeAreaView>
  );
};

export default Search;
