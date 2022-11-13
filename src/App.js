import {useEffect, useState} from 'react';
import './App.css';

function App() {
    // variables for authentication
    const CLIENT_ID = "b136039c2bad4a978b33db20e143a30a"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`

    // state variables
    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        // if no prev stored token, then check for hash
        if (!token && hash) {
            token = hash.substring(1).split("&")
                .find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        // if there is a token, update
        setToken(token)
    })

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1> Spotify React</h1>
                {!token ?
                    <a href={AUTH_URL}>
                        Login to Spotify
                    </a>
                    : <button onClick={logout}>Logout</button>}
            </header>
        </div>
    );
}

export default App;
