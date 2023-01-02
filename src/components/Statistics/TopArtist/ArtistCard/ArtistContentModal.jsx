import {useDataLayerValue} from "../../../../utils/DataLayer";
import React, {useEffect, useState} from "react";
import {EyeIcon, HeartIcon} from "@heroicons/react/20/solid";
import SpotifyWebApi from "spotify-web-api-js";

import '../../../../styles/ArtistCard.css';


export const ArtistContentModal = ({data}) => {
    const [{token}, dispatch] = useDataLayerValue();
    const [artistTopTracks, setArtistTopTracks] = useState([]);
    const spotify = new SpotifyWebApi()
    spotify.setAccessToken(token)


    useEffect(() => {
        spotify.getArtistTopTracks(data.artistData.id, "US").then((response) => {
            console.log('response', response)
            setArtistTopTracks(response.tracks)
        })


    }, [])

    const ArtistCover = () => {
        return(
            <div className={'relative fixed w-1/2  flex place-content-center'}>
                <div className={' w-[30vh] flex flex-col space-y-2 mb-12  '}>
                    <img className={' rounded-lg'} src={'https://i.scdn.co/image/ab6761610000e5eb2bc3dfc28da945cae3f6debf'}/>
                    <div className={'btn lowercase rounded-lg w-full bg-green-500 border-transparent h-16 flex items-center'}> Generate Playlist </div>
                    <div className={'btn lowercase rounded-lg w-full bg-slate-500 border-transparent h-16 flex items-center'}> Open In Spotify </div>
                </div>
            </div>
            
        )
    }

    const ArtistInfo = () => {
        return(
            <div className={'relative w-1/2 flex flex-col space-y-8 place-content-start'}>
                <h1 className={'font-extrabold lg:text-5xl xl:text-6xl pt-6'}>
                    <span className={'inline block'}> {data.artistData.name}</span>
                </h1>
                {/*pills*/}
                <div className={'flex flex-wrap h-fit place-content-start gap-3'}>
                    {data.artistData.genres.map((genre, index) => {
                        return(
                            <span key={index} className={'bg-slate-700 rounded-3xl px-5 py-2'}> {genre} </span>
                        )
                    })}
                </div>
                {/* popularity   */}
                <div className={'flex inline gap-x-4'}>
                    <div className={'h-28 rounded-lg flex w-1/2 bg-gray-700 space-x-5'}>
                        <div className={'w-1/3 flex items-center place-content-end '}>
                            <EyeIcon className={'h-8 w-8'}/>
                        </div>
                        <div className={"flex flex-col space-y-0.5 items-start place-content-center font-bold"}>
                            <div className={'text-slate-500 text-base'}>Popularity</div>
                            <div className={'text-lg'}> Placeholder </div>
                        </div>
                    </div>
                    <div className={'h-28 rounded-lg flex w-1/2 bg-gray-700 space-x-5'}>
                        <div className={'w-1/3 flex items-center place-content-end '}>
                            <HeartIcon className={'h-8 w-8'}/>
                        </div>
                        <div className={"flex flex-col space-y-0.5 items-start place-content-center font-bold"}>
                            <div className={'text-slate-500 text-base'}>Followers</div>
                            <div className={'text-lg'}> Placeholder </div>
                        </div>
                    </div>
                </div>

                {/* top tracks */}

                <div className={'lg:text-xl 2xl:text-3xl font-bold'}>
                    Top Tracks
                    <div className="carousel carousel-center space-x-4">
                        <div className="carousel-item rounded-t-lg">

                            <img src="https://placeimg.com/250/180/arch" className="" />
                            <div className={'carousel-item-content'}>
                                <span> hello </span>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                        </div>
                    </div>
                    {/*<div className="carousel relative w-full space-x-6">*/}
                    {/*    {artistTopTracks?.map((track, index) => {*/}
                    {/*        return(*/}
                    {/*            <div key={index} className="carousel-item  flex-col overflow-hidden ">*/}
                    {/*                <img src={track.album.images[1].url} className={" w-40 h-40"} alt="Drink" />*/}
                    {/*                <div className={"carousel-item-content z-50 bg-blue-200 absolute"}> oops</div>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</div>*/}
                </div>
            </div>
            )
    }



    return (
        <>
            <div className={''}>
                <label htmlFor="my-modal-3" className="btn">open modal</label>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal text-black">
                    <div className="modal-box bg-zinc-900 text-white max-w-none max-h-none w-[85vw] h-[80vh]">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className={"w-full flex block mt-20 "}>
                            <ArtistCover/>
                            <ArtistInfo/>

                        </div>
                        {/*<h3 className="text-lg font-bold">Congratulations random Internet user!</h3>*/}
                        {/*<p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>*/}
                    </div>
                </div>
            </div>
        </>
    )
}