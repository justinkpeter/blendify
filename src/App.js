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
                    top_tracks: response,
                })
            })
            spotify.getMyTopTracks({ time_range: "medium_term"}).then((response) => {
                dispatch({
                    type: "SET_TOP_TRACKS_MEDIUM",
                    top_tracks: response,
                })
            })
            spotify.getMyTopTracks({ time_range: "long_term", limit: 50}).then((response) => {
                dispatch({
                    type: "SET_TOP_TRACKS_LONG",
                    top_tracks: response.items,
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
