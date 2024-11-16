import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/screens/login/Login';
import Verify from './src/components/screens/login/Verify';
import Name from './src/components/screens/login/Name';
import Password from './src/components/screens/login/Password';
import HomeTabs from './src/components/screens/main/HomeTabs';
import Info from './src/components/screens/main/home-bottom-tabs/Profile-sub/Info';
import Payment from './src/components/screens/main/home-bottom-tabs/Profile-sub/Payment';
import Details from './src/components/screens/main/home-bottom-tabs/Profile-sub/Details';
import LectureTabs from './src/components/screens/main/home-bottom-tabs/LectureTabs';
import ClassMaths from './src/components/screens/main/home-bottom-tabs/lecture-top-tabs/lecture-sub/ClassMaths';
import ClassUiUx from './src/components/screens/main/home-bottom-tabs/lecture-top-tabs/lecture-sub/ClassUiUx';
import ClassThreeDArt from './src/components/screens/main/home-bottom-tabs/lecture-top-tabs/lecture-sub/ClassThreeDArt';
import ClassHistory from './src/components/screens/main/home-bottom-tabs/lecture-top-tabs/lecture-sub/ClassHistory';
import ClassPython from './src/components/screens/main/home-bottom-tabs/lecture-top-tabs/lecture-sub/ClassPython';
import ClassBiology from './src/components/screens/main/home-bottom-tabs/lecture-top-tabs/lecture-sub/ClassBiology';
import ClassEditing from './src/components/screens/main/home-bottom-tabs/lecture-top-tabs/lecture-sub/ClassEditing';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Login: undefined;
  Verify: undefined;
  Name: undefined;
  HomeTabs: undefined;
  Password: undefined;
  LectureTabs: undefined;
  ClassMaths: { title: string };
  ClassUiUx: { title: string };
  ClassThreeDArt: { title: string };
  ClassHistory: { title: string };
  ClassPython: { title: string };
  ClassBiology: { title: string };
  ClassEditing: { title: string };
  Profile: undefined;
  Info: undefined; 
  Payment: undefined;
  Details: undefined;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="Verify" 
          component={Verify} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="Name" 
          component={Name} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="HomeTabs" 
          component={HomeTabs} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="Password" 
          component={Password} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Info" 
          component={Info} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Payment" 
          component={Payment} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Details" 
          component={Details} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen
          name="LectureTabs"
          component={LectureTabs} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen
          name="ClassMaths"
          component={ClassMaths}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ClassUiUx"
          component={ClassUiUx}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ClassThreeDArt"
          component={ClassThreeDArt}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ClassHistory"
          component={ClassHistory}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ClassPython"
          component={ClassPython}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ClassBiology"
          component={ClassBiology}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ClassEditing"
          component={ClassEditing}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
