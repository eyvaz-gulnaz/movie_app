import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const MovieListItem = ({movie}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('details', {id: movie.id})}
      style={{flex: 1}}>
      <Image
        source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}}
        style={{width: '100%', aspectRatio: 3 / 5, borderRadius: 20}}
      />
      <Text>{movie.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
