import {useEffect, useState} from 'react';
import Login from './views/Login'
import Dashboard from './views/Dashboard'

import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./utils/DataLayer";


const spotify = new SpotifyWebApi()

function App() {
    const [{ user, token }, dispatch ] = useDataLayerValue();
    
    // variables for authentication
    const CLIENT_ID = "b136039c2bad4a978b33db20e143a30a"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`

    // state variables
    // const [token, setToken] = useState("")

    // useEffect(() => {
    //     const hash = window.location.hash
    //     let token = window.localStorage.getItem("token")
    //
    //     // if no prev stored token, then check for hash
    //     if (!token && hash) {
    //         token = hash.substring(1).split("&")
    //             .find(elem => elem.startsWith("access_token")).split("=")[1]
    //         window.location.hash = ""
    //         window.localStorage.setItem("token", token)
    //     }
    //
    //     // if there is a token, update
    //     // setToken(token)
    // })
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
        <div className="App">
            {token ? <Dashboard/> : <Login />}
        </div>
    );
}

export default App;
