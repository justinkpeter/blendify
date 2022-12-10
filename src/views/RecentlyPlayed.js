import {useEffect} from 'react';
import { useDataLayerValue } from "../utils/DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi()


const Song = ({track}) => {
    return(
        <div className={"flex items-center gap-3 text-sm p-5"}>
            {/* Album Art */}
            <div className="avatar">
                <div className="w-16 rounded-full">
                    <img src={track?.album.images[0].url} />
                </div>
            </div>

            {/* Song Info */}
            <div className={"text-white"}>
                <div className={"font-thin"}>
                    {track?.artists[0].name}
                </div>
                <div className={"font-bold"}>
                    {track?.name}
                </div>
            </div>
        </div>
    )
}

export default function RecentlyPlayed(){
    const [{recently_played, token} , dispatch] = useDataLayerValue();
    // spotify.setAccessToken(token)

    // useEffect(() => {
    //     // spotify.getMyRecentlyPlayedTracks().then((response) => {
    //     //     dispatch({
    //     //         type: "SET_RECENTLY_PLAYED",
    //     //         recently_played: response?.items,
    //     //     })
    //     // })
    // }, [])

    return (
        <div className={"relative"}>
            <div className={"fixed p-3 w-full h-full bg-yellow-300/5 overflow-scroll"}>
                <div className={"flex content-center"}>
                    <h1 className={"font-bold"}> Recently Played </h1>
                </div>

                <div>
                    {recently_played?.map(item => (
                        <Song track={item.track}/>
                    ))}
                </div>


            </div>
        </div>
    )
}