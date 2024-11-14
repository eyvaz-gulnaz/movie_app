const headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjk0ZWNlYTdmYjc4ODAzZWMxNTU4NmM4ZDU3MGVlNCIsIm5iZiI6MTczMTQ4ODQxOS42Mzg4MzkyLCJzdWIiOiI2NTgwNGU1YzhkYmMzMzA4YjA5OTljYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ez7B4i3y_uweh1sVjA1_zTYVb1OgyVMbbg4PRLv__1k',
};

export const fetchTopRatedMovies = async () => {
  const url =
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const json = await response.json();
  return json.results;
};

export const fetchMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const json = await response.json();
  return json;
};
