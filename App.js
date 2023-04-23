import 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator()

// screens
import Home from "./screens/Home"
import Notes from "./screens/Notes"

import TimeTable  from './screens/timetable';





function BottomNav(){
  return (
           
                    <Tab.Navigator   initialRouteName="main">

                <Tab.Screen 
                name="notes" 
                component={Notes} 
                title=""Notes
                options={{
                  tabBarLabel: 'Notes',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="book" color={color} size={26} />
                  ),
                }}
                
                />


                  <Tab.Screen 
                            name="main" 
                            component={Home} 
                            
                            options={{
                              tabBarLabel: 'Home',
                              title:"Home",
                              tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="home" color={color} size={26} />
                              ),
                            }}
                            
                            />
                  <Tab.Screen 
                            name="timetable" 
                            component={TimeTable} 
                            options={{
                              tabBarLabel: 'timetable',
                              tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="timetable" color={color} size={26} />
                              ),
                            }}
                            
                            />            

                </Tab.Navigator>
                  )
}



export default function App() {
  return (

    <>
    <StatusBar />
     <NavigationContainer>
       <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen name="Home" options={{ title: 'SPARK' }} component={BottomNav} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
   
  
  );
}
