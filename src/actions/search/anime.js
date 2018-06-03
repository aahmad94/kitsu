import axios from 'axios';

const url = "https://kitsu.io/api/edge/anime?page[limit]=5&filter[text]=dragon%20ball"

export const fetchAnime = () => {
  return axios.get(url).then(resp => resp.data);
};