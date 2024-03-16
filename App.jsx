import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import ScheduleScreen from './Screens/ScheduleScreen';
import PaymentScreen from './Screens/PaymentScreen';
import Register from './Screens/Register';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
     
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home Screen'}} />
        <Stack.Screen name="schedule" component={ScheduleScreen} />
        <Stack.Screen name="payment" component={PaymentScreen} />
        
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
