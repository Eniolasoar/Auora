import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View ,Image} from 'react-native';
import { Link,Redirect,router } from 'expo-router';
import {SafeAreaView} from "react-native-safe-area-context";
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
export default function App() {
  
  return (
   
   <SafeAreaView className="bg-primary h-full">
    <ScrollView contentContainerStyle={{ height:"100%" }}>
      <View className="w-full justify-center items-center min-h-[85vh] px-4 ">
        <Image source={images.logo} resizeMode="contain" className="w-[130px] h-[84px]" />
        <Image source={images.cards} className="max-w--[380px] w-full h-[300px]" resizeMode="contain"/>
        <View className="relative mt-5">
            <Text className="text-3xl text-white text-center font-bold">Discover Endless Possiblities with <Text className="text-secondary-200">Auora</Text></Text>
            <Image source={images.path} className="w-[36px] h-[15px] absolute -bottom-2 -right-0.5" resizeMode='contain' />
        </View>

        <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation:
          embark on a journey of limitless exploration with Aoura
        </Text>

        <CustomButton title="Continue With Email" handlePress={()=>router.push("/SignIn")} containerStyles="w-full mt-7"/>
      </View>
    </ScrollView>

    <StatusBar backgroundColor='red' style='dark'/>
   </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
