import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchMovie} from '../apis/movies';
import {useNavigation, useRoute} from '@react-navigation/native';

export const MovieDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {id} = route.params;

  const {data, isLoading, error} = useQuery({
    queryKey: ['movies', id],
    queryFn: () => fetchMovie(id),
  });

  useEffect(() => {
    if (data?.title) {
      navigation.setOptions({title: data.title});
    }
  }, [data, navigation]);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch movies </Text>;
  }

  return (
    <View>
      <Image
        source={{uri: 'https://image.tmdb.org/t/p/w500' + data.backdrop_path}}
        style={{width: '100%', height: 300}}
      />
      <View style={{padding: 10}}>
        <Text style={{fontSize: 30, fontWeight: '500', marginVertical: 10}}>
          {data.title}
        </Text>
        <Text style={{fontSize: 16}}>{data.overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
