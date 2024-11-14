import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {HomeScreen} from './src/screens/Home.Screen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MovieDetailsScreen} from './src/screens/MovieDetails.Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const client = new QueryClient();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{title: 'movies'}}
          />
          <Stack.Screen name="details" component={MovieDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
