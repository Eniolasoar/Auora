import { View, Text } from 'react-native'
import React from 'react'
import {Tabs,Redirect} from "expo-router";
import { icons } from '../../constants'
import {Image} from 'react-native';

// const TabIcon=({focused,color,icon,name})=>{
// return(
//    <View>
//     <Image source={icon}/>
//    </View>
// )
// }
const TabIcon = ({ focused, color, icon, name }) => {
    return(
        <View className="items-center justify-center gap-2">
            <Image source={icon} resizeMode='contain' className="w-5 h-5" 
            tintColor={color} />
            <Text className={`${focused? "font-psemibold": "font-pregular"} text-xs` } style={{color}}>{name}</Text>
        </View>
    )
}
const TabsLayout = () => {

  return (
    <>
    <Tabs screenOptions={{  tabBarShowLabel:false,tabBarActiveTintColor:"#FFA001",tabBarInactiveTintColor:"#CDCDE0",tabBarStyle:{backgroundColor:"#161622",borderTopWidth:1,borderTopColor:"#232533",height:84} }}>
        
        {/* <Tabs.Screen name="Home" options={{title:"Home",tabBarIcon:({focused,color})=>(
            <TabIcon 
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}/>
            
        ) }}/> */}
        <Tabs.Screen name="Home" options={{ title:"Home",headerShown:false,
            tabBarIcon:({focused,color})=>(
                <TabIcon icon={icons.home} color={color} name="Home" focused={focused}/>
            )
        }}/>
       
        <Tabs.Screen name="Create" options={{ title:"Create",headerShown:false,
            tabBarIcon:({focused,color})=>(
                <TabIcon icon={icons.plus} color={color} name="Create" focused={focused}/>
            )
        }}/>
        <Tabs.Screen name="Profile" options={{ title:"Profile",headerShown:false,
            tabBarIcon:({focused,color})=>(
                <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused}/>
            )
        }}/>
    </Tabs>
    </>
  )
}

export default TabsLayout