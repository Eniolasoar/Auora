import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image,ActivityIndicator } from 'react-native';
import { icons } from '../constants';
import { useState } from 'react';
import { Video,ResizeMode 
} from "expo-av";
const VideoCard = ({video:{title,thumbnail,video,avatar,creator
}}) => { 
   
     
    const [play, setPlay] = useState(false);
    const [loading, setLoading] = useState(true);
    
  return (
    <View className='flex-col items-center px-4 mb-14'>
        <View className='flex-row gap-3 items-start'>
            <View className='justify-center items-center flex-row flex-1'>
                <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
                    
                    <Image source={{ uri:avatar }} className='w-full h-full rounded-lg' resizeMode='cover'/>
                </View>

                <View className='justify-center flex-1 ml-3 gap-y-1'>
                    <Text className='text-white text-sm font-psemibold' numberOfLines={1}>{title}</Text>
                    <Text className='text-xs text-gray-100 font-pregular'>{creator}</Text>
                </View>
            </View>

            <View className='pt-2'>
                <Image source={icons.menu} className='w-5 h-5' resizeMode='contain'/>
            </View>
        </View>

        {play?(
           <View className='w-full '>
           {loading && (
              <ActivityIndicator
                size="large"
                color="gray"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: [{ translateX: -35 }, { translateY: -35 }],
                }}
              />
            )}
            <Video
              source={{ uri: video }}
              className="w-92 h-72 rounded-[35px] mt-3 bg-white/10 "
              onLoadStart={() => {
                setLoading(true);
              }}
              onLoad={() => {
                setLoading(false);
              }}
              resizeMode={ResizeMode.CONTAIN}
              useNativeControls
              shouldPlay
              onPlaybackStatusUpdate={(status) => {
                if (status.didJustFinish) {
                  setPlay(false);
                }
              }}
            />
          </View>
        ):
        <TouchableOpacity className="w-full h-60 rounded-xl mt-3 relative justify-center items-center" onPress={()=>setPlay(true)} activeOpacity={0.7}>
            <Image source={{ uri: thumbnail }} className='w-full h-full rounded-xl mt-3' resizeMode='cover'/>
            <Image source={icons.play} className="w-12 h-12 absolute" resizeMethod='contain'/>
        </TouchableOpacity>
        }
      
    </View>
  )
}

export default VideoCard