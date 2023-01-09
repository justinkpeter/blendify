import { numberWithCommas } from "../../../utils/functions";
import {PlayIcon} from "@heroicons/react/24/solid";

export const ArtistTileComponents = () => {
    return (
        <></>
    );
}


// displays ArtistTile image
export const ArtistTileImage = ({image}) => {
    return(<img src={image} alt={'oops'}/>)
}

// controls the overlay that appears when hovering over the artist tile
export const ArtistTileOverlay = () => {
    return(<div className={'artist-tile-overlay'}/>)
}

// controls the name that appears over the artist tile
export const ArtistTileName = ({name}) => {
    return(
        <div className={'artist-tile-info'}>
            <span className={"text-base font-normal"}> Your Top Artist </span>
            <span className={"text-2xl font-bold"}> {name} </span>
        </div>
    )
}

// controls the stats that appear when hovering over the artist tile
export const ArtistTileStats = ({popularity, followers, topTrack}) => {
    return(
        <div className={'artist-tile-stats'}>
            <ul className={'font-medium w-2/3 overflow-hidden space-y-3.5'}>
                <li>
                    <h3 className={'text-base font-light'}> Popularity </h3>
                    <p className={'text-2xl font-bold'}>{popularity}</p>
                </li>
                <li>
                    <h3 className={'text-base font-light'}> Followers </h3>
                    <p className={'text-2xl font-bold'}>{numberWithCommas(followers)}</p>
                </li>
                <li>
                    <h3 className={'text-base font-light'}> Top Track </h3>
                    <p className={'text-2xl font-bold'}>{topTrack ? topTrack.name : ''}</p>
                </li>
            </ul>
        </div>
    )
}

export const ArtistTileAudioControl = () => {
    // useEffect()
    return (
        <div className={"artist-tile-player"}>
            <div className={'backdrop bg-zinc-900'}/>
            <div className={"absolute inset-0 flex justify-center mt-2 "}>
                <PlayIcon className={"w-6 h-6 text-green-500"}/>
            </div>

        </div>
    )
}

// controls the track "album art"  and progress bar that appears when hovering over the artist tile
export const ArtistTileTrackInfo = ({track}) => {
    if(track) {
        return (
            <div className={'track-details space-y-2'}>
                <div className={'bg-cover w-[14vh] h-[14vh] track-cover'}
                     style={{backgroundImage: `url(${track.album.images[0].url})`}}/>
                <div className={'rounded-full w-full h-1 bg-gray-200'}>
                    <div style={{width: `50%`}} className={'w-1/2 rounded-full h-1 bg-green-500'}/>
                </div>
                <h4 className={'font-bold lg:text-lg text-right overflow-hidden'}>
                    <span className={'mt-4 flex flex-col justify-center'}>
                        {track.name}
                    </span>
                </h4>
            </div>
        )
    } else {
        return('')
    }
}

export const ArtistTileTrackPreview = ({track}) => {
    if(track){
        return(
            <div>
                <audio id="myAudio" preload="none" src={track.preview_url}></audio>
            </div>
        )
    }else{
        return('')
    }

}