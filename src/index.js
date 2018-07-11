import search from './search';

import album from './album';

import {
  API_URL
} from './config';
/*search,
    searchArtists,
    searchAlbums,
    searchPlaylists,
    getAlbum,
    getAlbums,
    getAlbumsTracks*/
export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
    this.search = search.bind(this)();
    this.album = album.bind(this)();
    this.headers = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    };
  }

  request(url) {
    return fetch(url, this.headers);
  }
}
