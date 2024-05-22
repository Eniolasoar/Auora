
import { useLocalSearchParams } from 'expo-router'
import { View, Text, FlatList,SafeAreaView ,StatusBar,TouchableOpacity,Image} from "react-native";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalProvider";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { useState } from "react";
import { videos } from "../../dummies/Videos";
import VideoCard from "../../components/VideoCard";
import { icons } from '../../constants';
import InfoBox from '../../components/InfoBox';

const Profile = () => {

  StatusBar.setBarStyle("light-content");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const {query}=useLocalSearchParams();

  const [userName,setUserName]=useState("EniDev");

  const getProfile=(query)=>{
const filteredVideos=videos.filter((video)=>video.creator.toLowerCase().includes(query.toLowerCase()));
return filteredVideos;
  }
  useEffect(()=>{
    setData(getProfile(userName));
  },[query])

  const { user, isLoggedin } = useGlobalContext();

  const logout=()=>{
    
  }
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
          <View className='w-full justify-center items-center mt-6 mb-12 px-4'>
            <TouchableOpacity className='w-full items-end mb-10' onPress={logout}>
              <Image source={icons.logout} resizeMode="contain" className='w-6 h-6'/> 
            </TouchableOpacity>

            <View className='w-16 h-16 border border-secondary rounded-lg justify-center items-center'>
              <Image className='w-[90%] h-[90%] rounded-lg' source={{ uri:videos[0].avatar }} resizeMethod='cover'/>
            </View>

            <InfoBox
            title={userName}
            containerStyles="mt-5"
            titleStyles="text-lg"
            />
            <View className='mt-5 flex-row items-center'>
            <InfoBox
            title={data.length || 0}
            subTitle="Posts"
            containerStyles="mr-10"
            titleStyles="text-xl"
            />
            
            <InfoBox
            title="1.5k"
            subTitle="Followers"
            titleStyles="text-xl"
            />
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

export default Profile;
