import React, { Component } from 'react'

function Login(props){

    const goToSpotifyAuthPage = () =>{
        window.location.href = props.auth
    }
    return (
        <div>
            <h1> Blendify </h1>
            <button onClick={goToSpotifyAuthPage}> Log in </button>
        </div>

    )
}

export default Login