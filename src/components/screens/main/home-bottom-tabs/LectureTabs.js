import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Lecture from './lecture-top-tabs/Lecture';
import Ongoing from './lecture-top-tabs/Ongoing';
import Completed from './lecture-top-tabs/Completed';

const Tab = createMaterialTopTabNavigator();

export default function LectureTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },     
        tabBarStyle: { backgroundColor: '#fff' },  
        tabBarIndicatorStyle: { backgroundColor: '#000' },
      }}
    >
      <Tab.Screen name="Lecture" component={Lecture} />
      <Tab.Screen name="Ongoing" component={Ongoing} />
      <Tab.Screen name="Completed" component={Completed} />
    </Tab.Navigator>
  );
}
