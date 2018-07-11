global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQA2eW-u61Nn4r0k2PcEIb6f9xt4UyjGsjpYMqjURLYfCekRFiYWQD6h3bHUi7Kl_HCk9uY_AhPkYLlo7LwjBN5PFCcKGngIeYIEmWUupgo_LSdsfOLWXORVmpSNc3ZH9PQH5kYdpX0Dn52WS_k-iaATqvTvB5yixkcETxGcGo24scno8J1yNeY3ctD7jreo9ceQrBuZhBRG38mXd2Bim9R5y1KfPGSMvqCg0JhbKv4uXn3EH7jCFMx7E1Wm7wVEvuxtG8V3TAKBwPOLLwiwfWM'
});

const albums = spotify.search.albums('Incubus');

//console.log(albums);

albums.then(data => console.log(data))
