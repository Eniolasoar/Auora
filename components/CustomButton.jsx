import { TouchableOpacity,Text,ActivityIndicator, View } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading}) => {
  return (
   <TouchableOpacity disabled={isLoading} activeOpacity={0.7}  onPress={handlePress} className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50": "" }`}>
    
      {isLoading ? (
      <View className='flex-row items-center gap-5'>
        <ActivityIndicator color="white" size="medium"></ActivityIndicator>
        <Text className={`text-primary font-pmedium text-lg ${textStyles}`}>{title}</Text>
      </View>)
      : <Text className={`text-primary font-pmedium text-lg ${textStyles}`}>{title}</Text>}
      
   </TouchableOpacity>
  )
}

export default CustomButton