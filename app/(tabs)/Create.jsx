import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import FormField from "../../components/FormField";
import { Video, ResizeMode } from "expo-av";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import * as ImagePicker from "expo-image-picker"
import { router } from "expo-router";
const Create = () => {
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
  });

  const openPicker = async (selectType)=>{
const result= await ImagePicker.launchImageLibraryAsync({
  mediaTypes: selectType === "image" ? ImagePicker.MediaTypeOptions.Images : ImagePicker.MediaTypeOptions.Videos,
  aspect: [4,3],
  quality:1
})

if(!result.canceled){
  if(selectType === "image"){
    setForm({...form, thumbnail:result.assets[0]})
  }
  if(selectType === "video"){
    setForm({...form, video:result.assets[0]})
  
}
  }

  
else{
  setTimeout(()=>{
    Alert.alert("Document Picked",JSON.stringify(result,null,2))
  },100)
}
  const submit = ()=>{
if(!form.prompt|| !form.title || !form.video || !form.thumbnail){
  return Alert.alert("Error","Please fill in all the fields")
}
setUploading(true)

try {
  Alert.alert("Success","Post uploaded successfully");
  router.push("/Home")
} catch (error) {
Alert.alert("Error",error.message)
}finally{
  setForm({title:"",video:null,thumbnail:null,prompt:""})
}
  }}
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white">Upload Video</Text>

        <FormField
          title="Video Title"
          value={form.title}
          placeholder="Give your video a catch title...."
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Upload Video
          </Text>

          <TouchableOpacity onPress={()=>openPicker("video")}>
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
                resizeMode={ResizeMode.CONTAIN}
                className='w-full h-64 rounded-2xl'
              />
            ) : (
              <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                <View className="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
                  <Image
                    source={icons.upload} resizeMethod="contain" // Replace with your image path
                    className='w-1/2 h-1/2'
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className='mt-7 space-y-2'>
        <Text className="text-base text-gray-100 font-pmedium">
            Thumbnail Image
          </Text>

          <TouchableOpacity onPress={()=>openPicker("image")}>
            {form.thumbnail ? (
              <Image source={{ uri:form.thumbnail.uri }}
              resizeMode="cover"
              className='w-full h-64 rounded-2xl'
              />
            ) : (
              <View className="w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center border-2 border-black-200 flex-row space-x-2">
                  <Image
                    source={icons.upload} resizeMethod="contain" // Replace with your image path
                    className='w-5 h-5'
                  />
                  <Text className='text-sm text-gray-100 font-pmedium'>Choose a File</Text>
                </View>
            
            )}
          </TouchableOpacity>

        </View>

        <FormField
          title=" AI Prompt"
          value={form.prompt}
          placeholder="The prompt you used to create this video"
          handleChangeText={(e) => setForm({ ...form, prompt: e })}
          otherStyles="mt-7"
        />

        <CustomButton title="Submit and Publish" handlePress={submit} containerStyles="mt-7"
        isLoading={uploading}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
