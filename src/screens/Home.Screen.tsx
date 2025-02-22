import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {fetchTopRatedMovies} from '../apis/movies';
import {useInfiniteQuery} from '@tanstack/react-query';
import {MovieListItem} from '../components/MovieListItem';

export const HomeScreen = () => {
  const {data, isLoading, error, fetchNextPage} = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: fetchTopRatedMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error {error.message}</Text>;
  }

  const movies = data?.pages?.flat();
  return (
    <View>
      <FlatList
        data={movies}
        numColumns={2}
        renderItem={({item}) => <MovieListItem movie={item} />}
        contentContainerStyle={{gap: 5, padding: 5}}
        columnWrapperStyle={{gap: 5}}
        onEndReached={() => {
          fetchNextPage();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
