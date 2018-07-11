import chai, { expect } from 'chai';
import SpotifyWrapper from '../src/index';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

chai.use(sinonChai);

global.fetch = require('node-fetch');


// getAlbum
// getAlbums
// getAlbumTracks
describe('Album', () => {
    let spotify;
    let stubedFetch;
    let promise;

    beforeEach(() => {
      spotify = new SpotifyWrapper({
        token: 'foo'
      });

      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
        stubedFetch.restore();
    });

    describe('smoke tests', () => {
        it('should have getAlbum method', () => {
            expect(spotify.album.getAlbum).to.exist;
        });

        it('should have getAlbums method', () => {
            expect(spotify.album.getAlbums).to.exist;
        });

        it('should have getAlbumsTracks method', () => {
            expect(spotify.album.getTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        // Verifica se o fetch ocorre
        // Verifica se o fetch ocorre com a url desejada
        // Verifica se o dado é recebido pela promise
        it('should call fetch method', () => {
            const album = spotify.album.getAlbum();
            expect(stubedFetch).to.be.calledOnce;
        });

        it('should call fetch method with correct url', () => {
            const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');
        });

        it('should return the correct data from the Promise', () => {
            promise.resolves({album: 'name'});
            const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            //expect(album.resolveValue).to.have.been.eql({album: 'name'});
        });
    });

    describe('getAlbums', () => {
        // Verifica se o fetch ocorre
        // Verifica se o fetch ocorre com a url desejada
        // Verifica se o dado é recebido pela promise
        it('should call fetch method', () => {
            const albums = spotify.album.getAlbums();
            expect(stubedFetch).to.be.calledOnce;
        });

        it('should call fetch method with correct url', () => {
            const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
        });

        it('should return the correct data from the Promise', () => {
            promise.resolves({album: 'name'});
            const albums = spotify.album.getAlbums('4aawyAB9vmqN3uQ7FjRGTy');
            //expect(album.resolveValue).to.have.been.eql({album: 'name'});
        });
    });

    describe('getAlbumsTracks', () => {
        // Verifica se o fetch ocorre
        // Verifica se o fetch ocorre com a url desejada
        // Verifica se o dado é recebido pela promise
        it('should call fetch method', () => {
            const tracks = spotify.album.getTracks();
            expect(stubedFetch).to.be.calledOnce;
        });

        it('should call fetch method with correct url', () => {
            const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
        });

        it('should return the correct data from the Promise', () => {
            promise.resolves({track: 'name'});
            const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
            //expect(album.resolveValue).to.have.been.eql({album: 'name'});
        });
    });
});
