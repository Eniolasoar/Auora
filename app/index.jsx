import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import {SafeAreaView} from "react-native-safe-area-context";
import { images } from '../constants';
export default function App() {
  
  return (
   
   <SafeAreaView className="bg-primary h-full">
    <ScrollView contentContainerStyle={{ height:"100%" }}>
      <View className="w-full justify-center items-center h-full px-4 "></View>
    </ScrollView>

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
