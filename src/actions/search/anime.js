import axios from 'axios';

let url = "https://kitsu.io/api/edge/anime?page[limit]=5";

export const fetchAnime = (text) => {
  return axios.get(url, {
    params: {
      "filter[text]": text
    }
  }

  ).then(resp => resp.data);
};