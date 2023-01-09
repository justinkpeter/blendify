import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Dashboard.css'
import { useDataLayerValue } from "../utils/DataLayer";
import {TopArtists} from "../components/Statistics/TopArtists";
import {TopTracks} from "../components/Statistics/TopArtist/TopTracks/TopTracks.jsx";
import {TopGenres} from "../components/Statistics/TopGenres/TopGenres.jsx";
import {StreamingAnalysis} from "../components/Statistics/StreamingAnalysis/StreamingAnalysis";

export default function Dashboard(){

    function getSectionPercentage(){
        return ((window.scrollX / (document.body.scrollWidth - window.innerWidth)) * 100)
    }

    const Cell= () =>{
        // the grid cell
    }

    const [sections, setSections] = useState([
            {name: "Favorite Artists", color: "bg-yellow-500"},
            {name: "Favorite Tracks", color: "bg-blue-500"}
            // {name: "Personality Profile", color: "bg-yellow-500"},
            // {name: "Audio Analysis", color: "bg-red-500"}
        ])

    const [currentCard, setCurrentCard] = useState(sections[0].name);

    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            const currentSection = sections[Math.floor(getSectionPercentage() / 25)]?.name
            setCurrentCard(currentSection)
        });
        document.removeEventListener("scroll", (e) => {});
    }, [currentCard, sections]);

    const [ {token, top_artists, top_tracks_short, top_artists_long}, dispatch ] = useDataLayerValue();


    return(
        <div className={"flex flex-col h-screen w-screen"}>
            <div>
                <Navbar sections={sections} currentSection={currentCard}/>
                <div className={"flex overflow-x-scroll w-fit bg-zinc-900"}>
                    {top_artists ? <TopArtists/> : ""}
                    {top_tracks_short ? <TopTracks/> : ""}
                    {top_artists_long ? <TopGenres/> : ""}
                    {/*{ <StreamingAnalysis/> }*/}
                    {/*top*/}
                    {/*{sections.map((section) => {*/}
                    {/*    return(*/}
                    {/*        <Section key={section.name} name={section.name} color={section.color} id={section.name}/>*/}
                    {/*    )*/}
                    {/*})}*/}
                </div>
            </div>
        </div>
    )
}