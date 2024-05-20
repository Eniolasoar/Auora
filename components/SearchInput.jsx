import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons } from '../constants'

const SearchInput = ({title,value,placeholder,handleChangeText,otherStyles,keyboardType,...props}) => {
  const [query,setQuery]=useState("");
  return (
    
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary items-center flex-row space-x-4 text-white">
        <TextInput className="text-base mt-0.5 text-white flex-1 font-pregular placeholder:text-gray-500 " placeholderTextColor="gray" value={value} placeholder={placeholder} onChangeText={(e=>setQuery(e))} />
        <TouchableOpacity onPress={}>
            <Image source={icons.search} className="w-5 h-5" resizeMode='contain'/>
        </TouchableOpacity>
      </View>
 
  )
}

export default SearchInput