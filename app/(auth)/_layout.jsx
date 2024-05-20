import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from "react-native"

const AuthLayout = () => {
  StatusBar.setBarStyle("light-content");
  return (
    <>
    <Stack>
    <Stack.Screen name='SignIn'  options={{ headerShown:false }}/>
    <Stack.Screen name='SignUp' options={{ headerShown:false }} />
    </Stack>
  

    
    </>
  )
}

export default AuthLayout