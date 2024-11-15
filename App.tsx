import {StyleSheet} from 'react-native';
import React from 'react';
import {HomeScreen} from './src/screens/Home.Screen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {MovieDetailsScreen} from './src/screens/MovieDetails.Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WatchListScreen} from './src/screens/WatchList.Screen';
import {Bookmark, Home3} from 'iconsax-react-native';

const client = new QueryClient();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{title: 'Movies'}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="details" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};
const WatchListStack = () => {
  return (
    <Stack.Navigator screenOptions={{title: 'Watchlist'}}>
      <Stack.Screen name="watchlist" component={WatchListScreen} />
      <Stack.Screen name="details" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}>
          <Tab.Screen
            name="HOME_STACK"
            component={HomeStack}
            options={{
              tabBarIcon: ({color}) => {
                return <Home3 color={color} size={32} />;
              },
            }}
          />
          <Tab.Screen
            name="WATCHLIST_STACK"
            component={WatchListStack}
            options={{
              tabBarIcon: ({color}) => {
                return <Bookmark color={color} size={32} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
