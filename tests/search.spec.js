import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/search';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Search', () => {

    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
        promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
        fetchedStub.restore();
    });

    describe('smoke tests', () => {
        // search (genérico) + de 1 tipo
        // searchAlbums
        // searchArtists
        // searchTracks
        // searchPlaylists

        it('should exist the search method', () => {
            expect(search).to.exist;
        });

        it('should exist the searchAlbums method', () => {
            expect(searchAlbums).to.exist;
        });

        it('should exist the searchArtists method', () => {
            expect(searchArtists).to.exist;
        });

        it('should exist the searchTracks method', () => {
            expect(searchTracks).to.exist;
        });

        it('should exist the searchPlaylists method', () => {
            expect(searchPlaylists).to.exist;
        });
    });

    describe('Generic Search', () => {

        

        it('should call fetch function', () => {
            const artists = search();

            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should receive the correct url to fetch', () => {

            context('passing one type', () => {

                const artist = search('Incubus', 'artist');
                expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

                const album = search('Incubus', 'album');
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');                

            });

            context('passing more than one type', () => {
                const artistsAndAlbums = search('Incubus', ['artist', 'album']);
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
            });
        });
        it('should return the JSON Data from the promise', () => {
            promise.resolves({ body: 'json' })
            const artists = search('Incubus', 'artist');

            //expect(artists.resolveValue).to.be.eql({ body: 'json' });
        });
    });

    describe('SearchArtists', () => {
        it('should call fetch function', () => {
            const artists = searchArtists('Incubus');
            expect(fetchedStub).to.be.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            const artists = searchArtists('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
        });
    });

    describe('SearchAlbums', () => {
        it('should call fetch function', () => {
            const album = searchAlbums('Incubus');
            expect(fetchedStub).to.be.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            const album = searchAlbums('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
        });
    });

    describe('SearchTracks', () => {
        it('should call fetch function', () => {
            const track = searchTracks('Incubus');
            expect(fetchedStub).to.be.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            const track = searchTracks('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
        });
    });

    describe('SearchPlaylists', () => {
        it('should call fetch function', () => {
            const playlist = searchPlaylists('Incubus');
            expect(fetchedStub).to.be.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            const playlist = searchPlaylists('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
        });
    });

});
