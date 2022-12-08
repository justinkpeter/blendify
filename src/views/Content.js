import React from 'react';
import {useDataLayerValue} from "../utils/DataLayer";

const Greeting = ({string, name}) =>{
    return (
        <div className={"p-2 font-bold text-3xl"}>
            <h1>{string}, {name}</h1>
        </div>
    );
}

const Card = ({name, image}) =>{
    return (
        <div className={"rounded-lg bg-white/5 flex"}>
            <img src={image} className={"w-1/5 object-contain "}/>
            <div className={"p-5 font-semibold"}>
                {name}
            </div>
        </div>
    );
}



export default function Content(props) {
    const [{ user, playlists }] = useDataLayerValue();

    const topPlaylists = playlists?.items?.filter((playlist, index) => index < 6);
    console.log(topPlaylists)
    console.log('user is ', user)

    return (
        <>
            <div className={"sticky col-start-2 col-span-3 rounded-xl scroll-auto"}>
                <Greeting string={"Good Afternoon"} name={user?.display_name}/>
                <div className={"grid grid-cols-3 gap-4 pt-8"}>
                    {topPlaylists?.map(playlist => (
                        <Card name={playlist.name} image={playlist.images[0].url}/>
                    ))}
                </div>
            </div>

            {/*<div> yerr </div>*/}
        </>



    )
}