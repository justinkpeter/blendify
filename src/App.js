import {useEffect, useState} from 'react';
import Login from './views/Login'
import Dashboard from './views/Dashboard'

import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./utils/DataLayer";
import CustomCursor from "./components/Mouse/CustomCursor";
import MouseGlow from "./components/Mouse/MouseGlow";

const spotify = new SpotifyWebApi()


function App() {
    const [{ user, token }, dispatch ] = useDataLayerValue();
    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = ""    // adds a lil' security, removes accessToken from URL 😉
        const _token = hash.access_token

        if(_token){
            dispatch({
                type: "SET_TOKEN",
                token: _token
            })

            spotify.setAccessToken(_token)
            spotify.getMe().then(user => {
                dispatch({
                    type: 'SET_USER',
                    user: user
                })
            })

            // getting user most played tracks
            spotify.getMyTopTracks({ time_range: "short_term", limit: 50}).then((response) => {
                dispatch({
                    type: "SET_TOP_TRACKS_SHORT",
                    top_tracks: response.items,
                })
            })
            spotify.getMyTopTracks({ time_range: "medium_term"}).then((response) => {
                dispatch({
                    type: "SET_TOP_TRACKS_MEDIUM",
                    top_tracks: response.items,
                })
            })
            spotify.getMyTopTracks({ time_range: "long_term", limit: 50}).then((response) => {
                dispatch({
                    type: "SET_TOP_TRACKS_LONG",
                    top_tracks: response.items,
                })
            })

            // getting top genres
            spotify.getMyTopTracks({ time_range: "short_term", limit: 50}).then((response) => {
                let artists = []
                response.items.forEach(track => {
                    artists.push(track.artists[0].id)
                })

                // fetching artist info to grab genres from each artist
                let genres = []
                let topGenres = []

                spotify.getArtists(artists).then((response) => {
                    //extracting genres from artists
                    response.artists.forEach(artist => {
                        genres.push(artist.genres)
                    })

                    // mapping genre frequency to object
                    const genreFrequency = {}
                    genres.forEach(genre => {
                        genre.forEach(genre => {
                            if(genreFrequency[genre]){
                                genreFrequency[genre] += 1
                            } else {
                                genreFrequency[genre] = 1
                            }
                        })
                    })

                    // sort genres by frequency
                    const sortedGenres = Object.keys(genreFrequency).sort(function(a,b){return genreFrequency[b]-genreFrequency[a]})

                    // return topGenres
                    topGenres =[
                        {name: sortedGenres[0], percentage: genreFrequency[sortedGenres[0]]/ genres.length * 100},
                        {name: sortedGenres[1], percentage: genreFrequency[sortedGenres[1]]/ genres.length * 100},
                        {name: sortedGenres[2], percentage: genreFrequency[sortedGenres[2]]/ genres.length * 100},
                        {name: sortedGenres[3], percentage: genreFrequency[sortedGenres[3]]/ genres.length * 100},
                        {name: sortedGenres[4], percentage: genreFrequency[sortedGenres[4]]/ genres.length * 100},
                    ]

                    dispatch({
                        type: "SET_TOP_GENRES",
                        top_genres: topGenres,
                    })

                })
            })

            // getting user most played artists
            spotify.getMyTopArtists({time_range: "short_term"}).then((response) => {
                // console.log('here are top artists', response)
                dispatch({
                    type: "SET_TOP_ARTISTS",
                    top_artists: response,
                })
            })
            spotify.getMyTopArtists({time_range: "long_term", limit: 50}).then((response) => {
                // console.log('here are top artists', response)
                dispatch({
                    type: "SET_TOP_ARTISTS_LONG",
                    top_artists: response,
                })
            })

            // waiting for requests to finish
            setTimeout(() => {
                // sometimes the token is not set in time, so we wait a bit
            }, 2000)

        }

    }, []);

    return (
        <div className="App ">
            <CustomCursor/>
            <MouseGlow/>
            {token ? <Dashboard/> : <Login />}
        </div>
    );
}

export default App;
