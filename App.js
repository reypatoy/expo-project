import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet, Image} from 'react-native';


import HomeScreen from './screens/pages/home';
import Blogs from './screens/pages/blogs';
import Appointment from './screens/pages/appointments';
import Services from './screens/pages/services';
import Account from './screens/pages/account';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{
           tabBarStyle: { color: 'black' },
          }}
            >
        <Tab.Screen options={{
            title: 'BeastFriend Veterinary Clinic',
            tabBarLabel: 'Home',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./logo/home.png')}
                />
              );
            },
          }}
         name="Home" component={HomeScreen} />
        <Tab.Screen 
          options={{
            title: 'BeastFriend Veterinary Clinic',
            tabBarLabel: 'Blogs',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./logo/blogs.jpg')}
                />
              );
            },
          }}
          name="Blogs" component={Blogs} />
        <Tab.Screen 
          options={{
            title: 'BeastFriend Veterinary Clinic',
            tabBarLabel: 'Appointment',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./logo/appointments.png')}
                />
              );
            },
          }}
          name="Appointment" component={Appointment} />
        <Tab.Screen options={{
            title: 'BeastFriend Veterinary Clinic',
            tabBarLabel: 'Services',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./logo/services.png')}
                />
              );
            },
          }}
          name="Services" component={Services} />
        <Tab.Screen 
          options={{
            title: 'BeastFriend Veterinary Clinic',
            tabBarLabel: 'Account',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./logo/account.png')}
                />
              );
            },
          }}
          name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
