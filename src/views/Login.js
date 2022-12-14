import React, { Component, useState, useEffect, useRef } from 'react'
import Test from "../Test"
// import '../styles/Styles.css'
import './Login.css'
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

function Login(props){

    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    const divStyle={
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        top: '300px'
    }

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
                    color: "#b77575",
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
        window.location.href = props.auth
    }
    return (
            <div className="login__wrapper" ref={vantaRef}>
                <h1> Blendify </h1>
                {/*<a href={props.auth}> Link </a>*/}
                <button onClick={goToSpotifyAuthPage}> Log in </button>
            </div>


    )
}

export default Login