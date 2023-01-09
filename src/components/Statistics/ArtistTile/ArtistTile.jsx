//col-start-10 col-4 row-start-3 row-span-4

import {PlayIcon} from "@heroicons/react/24/solid";
import "../../../styles/ArtistTile.css";
export const ArtistTile = ({colStart, colSpan, rowStart, rowSpan, ...props}) => {


    // height & width of tile
    const height = props?.height || `h-[50vh]`;
    const width = props?.width || `w-[40vh]`;

    //positioning of Tile in the grid, relative to the parent
    const gridPosition = `col-start-${colStart} 
                            col-span-${colSpan} 
                            row-start-${rowStart} 
                            row-span-${rowSpan}
                            ${height} 
                            ${width}`;

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const Player = () => {
        return (
            <div className={"artist-tile-player bg-zinc-900 "}>
                <div className={"absolute inset-0 flex justify-center mt-2 "}>
                    <PlayIcon className={"w-6 h-6   text-green-500"}/>
                </div>
            </div>
        )
    }

    const ArtistName = ({name}) => {
        return(
            <div className={'artist-tile-info'}>
                <span className={"text-base font-normal"}> Your Top Artist </span>
                <span className={"text-2xl font-bold"}> {name} </span>
            </div>
        )
    }

    const Stats = ({popularity, followers, topTrack}) => {
        return(
            <div className={'artist-tile-stats'}>
                <ul className={'font-medium w-2/3 overflow-hidden space-y-3.5'}>
                    <li>
                        <h3 className={'text-base font-light'}> Popularity </h3>
                        <p className={'text-2xl font-bold'}>{popularity}</p>
                    </li>
                    <li>
                        <h3 className={'text-base font-light'}> Followers </h3>
                        <p className={'text-2xl font-bold'}>{followers}</p>
                    </li>
                    <li>
                        <h3 className={'text-base font-light'}> Top Track </h3>
                        <p className={'text-2xl font-bold'}>{topTrack ? topTrack.name : ''}</p>
                    </li>
                </ul>
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

    const TrackInfo = ({track}) => {
        return (
            <div className={'track-details space-y-2'}>
                <div className={'bg-cover w-[14vh] h-[14vh] track-cover'} style={{backgroundImage: `url(${track.album.images[0].url})`}}/>

                <div className={'rounded-full w-full h-1 bg-gray-200'}>
                    <div className={'rounded-full w-1/2 h-1 bg-green-500'}/>
                    {/*<span className={'bg-yellow-500'}> {track.name}</span>*/}
                </div>

                <h4 className={'font-bold lg:text-lg text-right overflow-hidden'}>
                    <span className={'mt-4 flex flex-col justify-center'}>
                        {track.name}
                    </span>
                </h4>
            </div>
        )
    }

    // let  player = document.getElementById("myAudio");
    //
    // function playAudio() {
    //     console.log('playewr is')
    //     player.play();
    // }
    //
    // function pauseAudio() {
    //     player.pause();
    // }
    return (
        <div className={`artist-tile ${gridPosition}`}>
            {/*<TrackInfo track={props.topTrack}/>*/}

            <img src={props.img} alt={'oops'}/>
            <div className={'artist-tile-overlay'}/>
            <ArtistName name={props.title}/>
            <Stats
                popularity={props.popularity}
                followers={numberWithCommas(props.followers)}
                topTrack={props.topTrack}
            />
            <AudioControl/>
            {props.topTrack ? <TrackInfo track={props.topTrack}/> : ''}
            {props.topTrack ? <audio id="myAudio" preload="none" src={props.topTrack.preview_url}></audio> : ''}

        </div>
    );
}