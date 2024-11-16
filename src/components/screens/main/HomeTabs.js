import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home-bottom-tabs/Home'; 
import LectureTab from './home-bottom-tabs/LectureTabs'; 
import Profile from './home-bottom-tabs/Profile'; 

import HomeIcon from '../../../assets/icons/home.svg'; 
import HomeIconActive from '../../../assets/icons/home-b.svg'; 
import ClassIcon from '../../../assets/icons/class.svg'; 
import ClassIconActive from '../../../assets/icons/class-b.svg'; 
import ProfileIcon from '../../../assets/icons/profile.svg'; 
import ProfileIconActive from '../../../assets/icons/profile-b.svg'; 

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused ? HomeIconActive : HomeIcon;
  } else if (route.name === 'Lectures') {
    iconName = focused ? ClassIconActive : ClassIcon;
  } else if (route.name === 'Profile') {
    iconName = focused ? ProfileIconActive : ProfileIcon;
  }

  return iconName;
};

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#d4d4d4',
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIcon: ({ focused }) => {
          const Icon = getTabBarIcon(route, focused);
          return <Icon width={24} height={24} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Lectures" component={LectureTab} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
