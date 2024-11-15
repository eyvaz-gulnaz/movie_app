import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {MovieListItem} from '../components/MovieListItem';
import {fetchWatchList} from '../apis/watchlist';

export const WatchListScreen = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['watchlist'],
    queryFn: fetchWatchList,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error {error.message}</Text>;
  }
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <MovieListItem movie={item} />}
        contentContainerStyle={{gap: 5, padding: 5}}
        columnWrapperStyle={{gap: 5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
