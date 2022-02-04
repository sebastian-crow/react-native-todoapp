import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import NewScreen from './src/screens/NewScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007ba7'
            },
              headerTintColor: '#fff'
          }}
          initialRouteName="Home"
      >
        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({navigation}) => ({ 
              headerRight: () => (
                <Icon 
                  name="plus"
                  type="feather"
                  color="#fff"
                  style={style.headerIcon}
                  onPress={() => navigation.navigate('New')}
                />
              )
            })}
        />
        <Stack.Screen name="New" component={NewScreen} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  headerIcon: {
    marginRight: 10
  }
});
