import React, { Component, useState, useEffect, useRef } from 'react'
import './Login.css'
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

import { loginUrl } from "../utils/spotify.js";

function Login(props){

    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                GLOBE({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: false,
                    gyroControls: false,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    backgroundColor: 0x1b1a1a,
                    color: "#008949",
                    size: 1.50,
                    points: 14,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    const goToSpotifyAuthPage = () =>{
        window.location.href = loginUrl
    }
    return (
            <div className={"h-screen w-screen "} ref={vantaRef}>
                <div className={"relative flex"}>
                  <div className={"absolute top-80 left-40 w-1/3 text-white"}>
                      <div className={"text-8xl font-bold"}>
                          <span> Discover how you </span>
                          <span className={"text-green-500"}> listen.</span>
                      </div>
                      <div className={"pt-12 text-4xl text-white/80"}>
                          <span> Explore your music taste and create awesome playlists.</span>
                      </div>
                      <div className={"flex mt-16"}>
                        <button
                            className={"p-6 w-64 rounded-full bg-green-500 font-bold transition hover:bg-green-800"}
                            onClick={goToSpotifyAuthPage}
                        >
                            Continue with Spotify </button>
                      </div>
                  </div>
                </div>
                {/*<h1 className={"text-6xl"}> Discover how  </h1>*/}
                {/*<h1 className={"text-9xl"}> you listen </h1>*/}
                {/*<button c> Log in </button>*/}
            </div>
    )
}

export default Login