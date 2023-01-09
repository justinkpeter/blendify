//col-start-10 col-4 row-start-3 row-span-4

import {PlayIcon} from "@heroicons/react/24/solid";
import "../../../styles/ArtistTile.css";
import {useEffect, useState} from "react";

import {
    ArtistTileImage,
    ArtistTileOverlay,
    ArtistTileName,
    ArtistTileStats,
    ArtistTileTrackInfo,
    ArtistTileTrackPreview,
} from "./ArtistTileComponents";
export const ArtistTile = ({colStart, colSpan, rowStart, rowSpan, ...props}) => {


    // height & width of tile
    const height = props?.height || `h-[30vh]`;
    const width = props?.width || `w-[30vh]`;

    //positioning of Tile in the grid, relative to the parent
    const gridCol = `col-[${colStart}_/_span_${colSpan}]`;
    const gridRow= `row-[${rowStart}_/_span_${rowSpan}]`;
    const gridPosition = `${gridCol} ${gridRow} ${height} ${width}`;

    const Player = () => {
        return (
            <div className={"artist-tile-player bg-zinc-900 "}>
                <div className={"absolute inset-0 flex justify-center mt-2 "}>
                    <PlayIcon className={"w-6 h-6   text-green-500"}/>
                </div>
            </div>
        )
    }

    const AudioControl = () => {
        return (
            <div className={"artist-tile-player"}>
                <div className={'backdrop bg-zinc-900'}/>
                <div className={"absolute inset-0 flex justify-center mt-2 "}>
                    <PlayIcon className={"w-6 h-6 text-green-500"}/>
                </div>

            </div>
        )
    }

    function playTrack() {
        const audio = document.getElementById('myAudio')
        audio.volume = 0;
        audio.play();
        const fade = setInterval(() => {
            if (audio.volume < 0.99) {
                audio.volume += 0.01;
            } else {
                clearInterval(fade);
            }
        }, 50);

    }

    function pauseTrack() {
        const audio = document.getElementById('myAudio')
        const fade = setInterval(() => {
            if (audio.volume > 0.01) {
                audio.volume -= 0.01;
            } else {
                clearInterval(fade);
                audio.pause();
            }
        })
    }

    return (
        <div onMouseEnter={() => playTrack()} onMouseLeave={() => pauseTrack()} className={`artist-tile ${gridPosition}`}>
            <ArtistTileImage image={props.img}/>
            <ArtistTileOverlay/>
            <ArtistTileName name={props.title}/>
            <ArtistTileStats popularity={props.popularity} followers={props.followers} topTrack={props.topTrack}/>
            <AudioControl/>
            <ArtistTileTrackInfo track={props.topTrack}/>
            <ArtistTileTrackPreview track={props.topTrack}/>
            {/*{props.topTrack ? <audio id="myAudio" preload="none" src={props.topTrack.preview_url}></audio> : ''}*/}
        </div>
    );
}