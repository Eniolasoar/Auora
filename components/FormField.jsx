import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons } from '../constants'

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,keyboardType,...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary items-center flex-row">
        <TextInput className="flex flex-1 font-psemibold text-base text-white"  value={value} placeholder={placeholder} onChangeText={handleChangeText} secureTextEntry={title ==="Password" && !showPassword}/>
        {title==="Password" && <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
            <Image source={!showPassword?icons.eye:icons.eyeHide} className="w-6 h-6" resizeMode='contain'></Image></TouchableOpacity>}
      </View>
      
    </View>
  )
}

export default FormField