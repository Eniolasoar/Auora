import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from "./CustomButton"
import { router } from 'expo-router'

const EmptyState = ({title,subTitle}) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} className="w-[270px] h-[215px]" resizeMethod='contain'/>
      <Text className="font-psemimedium text-xl text-white text-center ">
                {title}
                </Text>
      <Text className="font-pmedium text-sm text-gray-100">
      {subTitle}
                </Text>
                
     <CustomButton title="Create Video" handlePress={()=>router.push("/Create")} containerStyles="w-full my-5"/>          
    </View>
  )
}

export default EmptyState