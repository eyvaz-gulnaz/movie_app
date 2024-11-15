export const fetchWatchList = async () => {
  const url =
    'https://api.themoviedb.org/3/account/20842355/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjk0ZWNlYTdmYjc4ODAzZWMxNTU4NmM4ZDU3MGVlNCIsIm5iZiI6MTczMTY1NjMwNS4xNzQ4MjQsInN1YiI6IjY1ODA0ZTVjOGRiYzMzMDhiMDk5OWNjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P7fwr8NW1iiz2qxgthSIZDtm4slAa5vX3ACukoWxx6U',
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const json = await response.json();
  return json.results;
};

export const addToWatchList = async (movieId: number) => {
  const url = 'https://api.themoviedb.org/3/account/20842355/watchlist';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjk0ZWNlYTdmYjc4ODAzZWMxNTU4NmM4ZDU3MGVlNCIsIm5iZiI6MTczMTY1NjMwNS4xNzQ4MjQsInN1YiI6IjY1ODA0ZTVjOGRiYzMzMDhiMDk5OWNjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P7fwr8NW1iiz2qxgthSIZDtm4slAa5vX3ACukoWxx6U',
    },
    body: JSON.stringify({
      media_type: 'movie',
      media_id: movieId,
      watchlist: true,
    }),
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const json = await response.json();
  return json;
};
