import { View, Text, FlatList, ImageBackground, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { icons, images } from "../constants";
import { Video,ResizeMode 

 } from "expo-av";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1.02,
  },
};

const zoomOut = {
  0: {
    scale: 1.02,
  },
  1: {
    scale: 0.9,
  },
};
const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  const extractVideoId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v\/|.*?vi?=))([^&]+)/);
    return match ? match[1] : null;
  };

  const youtubeEmbedUrl=item.video;
  const videoId = extractVideoId(youtubeEmbedUrl);
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
       <Video source={{ uri:item.video }}
       className='w-52 h-72 rounded-[35px] mt-3 bg-white/10' resizeMode={ResizeMode.CONTAIN} useNativeControls shouldPlay onPlaybackStatusUpdate={(status)=>{
        console.log(item.video);
        if(status.didJustFinish){
          setPlay(false)
        }
       }}
       />
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);
  const viewableItemsChanges = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      horizontal
      onViewableItemsChanged={viewableItemsChanges}
      viewabilityConfig={{ viewAreaCoveragePercentThreshold: 70 }}
      contentOffset={{ x: 170 }}
    />
  );
};

export default Trending;
