import { Stack } from "expo-router";
import React from 'react';
import HomePage from './index.js';
import 

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{
          title: 'Queue Matching', // Set the title to what you want
          headerStyle: { backgroundColor: 'black' }, // Customize the header background
          headerTintColor: 'white', // Customize the text color /> 

          }}/>
    </Stack>
  );
}
