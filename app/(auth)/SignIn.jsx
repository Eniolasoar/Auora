import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
const Sign = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const submit=()=>{}
  return (
    <SafeAreaView className="bg-primary h-full ">
     <ScrollView className="mx-4">
      <View classsName="w-full justify-center h-full px-10 my-20 items-center ">
         <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]pt-10 "/>
         <Text className="text-2xl text-white font-semibold mt-4 text-semibold ">Log in to Auora</Text>
         <FormField
         title="Email"
         value={form.email}
         handleChangeText={(e)=>setForm({...form,email:e})}
         otherStyles="mt-7"
         keyboardType="email-address"
         />
         <FormField
         title="Password"
         value={form.password}
         handleChangeText={(e)=>setForm({...form,password:e})}
         otherStyles="mt-7"
         keyboardType="email-address"
         />
         <CustomButton title="Sign In" handlePress={submit} containerStyles="mt-7"/>
      </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default Sign;