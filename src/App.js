import {useEffect, useState} from 'react';
import Login from './views/Login'
import Dashboard from './views/Dashboard'

import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./utils/DataLayer";


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

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists
                })
            })

            spotify.getPlaylist("37i9dQZEVXcP3DmpfdBbwF").then((response) =>
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response,
                })
            );
        }

    }, []);



    return (
        <div className="App ">
            {token ? <Dashboard/> : <Login />}
        </div>
    );
}

export default App;
