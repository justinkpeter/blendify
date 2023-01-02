import {useDataLayerValue} from "../../../utils/DataLayer";
import React, {useEffect, useState} from "react";
import {PlayIcon} from "@heroicons/react/24/solid";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi()



export const TopGenres = ({children}) => {
    // const [{top_tracks_long}, dispatch] = useDataLayerValue();
    const [{top_artists_long, top_tracks_short}, dispatch] = useDataLayerValue();
    const [topG, setTopGenre] = useState(null);


    let genresByArtist = [];
    top_artists_long?.map((artist) => {
        genresByArtist.push(artist.genres)
    })
    // console.log('genresByArtist', genresByArtist)


    //extracting genres from top artists
    let genres = []
    top_artists_long?.map((artist) => {
        artist.genres.forEach((genre) => {
            genres.push(genre)
        })
    })

    //find top genre
    let topGenre = genres.reduce((a, b, i, arr) => {
        return arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b

    })
    console.log(topGenre)

    //find top genre count
    // let topGenreCount = genres.reduce((a, b, i, arr) => {
    //     return arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? arr.filter(v => v === a).length : arr.filter(v => v === b).length
    // })

    // find out how many times the top genre appears in genresByArtist
    let topGenreCount = 0;
    genresByArtist.forEach((artist) =>{
        artist.forEach((genre) => {
            if( genre.includes(topGenre)){
                topGenreCount++
            }
        })
    })

    useEffect(() => {
        setTopGenre(topGenre)
    }, [topG])

    console.log('topGenreCount', topGenreCount)
    console.log('topGenreCount percentage', topGenreCount / genres.length)
    // console.log('top tracks long', top_tracks_short)




    return (
        <div className={"grid grid-cols-33 grid-rows-10 h-section w-[330vh]"}>
            {/*summary*/}
            <div className={'grid grid-cols-7 relative col-start-3 col-span-7 row-start-4 row-span-6 z-20'}>
                <div className={'absolute inset-0 z-20 leading-6'}>
                    <h1 className={'my-5 font-black text-7xl text-white'}>
                    <span className={'inline-block pr-[5vh]'}>
                        <span> {topG} </span>
                        <span className={'break-words text-green-400'}> slaps hard. </span>
                        <br/>
                    </span>
                    </h1>
                    <p className={'font-light text-xl text-gray-100 pr-[10vh]'}>
                    <span className={'inline-block leading-loose'}>
                        Looks like you're a huge {topG} fan. This appears in {topGenreCount}% of your top tracks. Nice one!
                    </span>
                    </p>
                </div>
            </div>

            {/* genre bar 1*/}
            <div className={'grid relative row-[3_/_span_7] col-[11_/_span_1] z-20'}>
                <div className={'absolute inset-0 z-20 block'}>
                    {/* genre bar*/}
                    <div className={'relative h-[50vh] overflow-hidden bg-gray-700 rounded-lg'}>
                        <span className={'h-[7.8vh] flex justify-center items-center transition'}> 30% </span>
                        {/*   genre bar level*/}
                        <div style={{height: '44%'}} className={'absolute right-0 bottom-0 left-0 rounded-lg bg-gradient-to-t from-amber-200 to-yellow-500 origin-bottom'}/>
                    </div>
                    <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh]'}>
                        Rap
                    </h3>
                </div>
            </div>

            {/* genre bar 2*/}
            <div className={'grid relative row-[3_/_span_7] col-[13_/_span_1] z-20'}>
                <div className={'absolute inset-0 z-20 block'}>
                    {/* genre bar*/}
                    <div className={'relative h-[50vh] overflow-hidden bg-gray-700 rounded-lg'}>
                        <span className={'h-[7.8vh] flex justify-center items-center transition'}> 30% </span>
                        {/*   genre bar level*/}
                        <div style={{height: '38%'}} className={'absolute right-0 bottom-0 left-0 rounded-lg bg-gradient-to-t from-green-200 via-green-400 to-green-500 origin-bottom'}/>
                    </div>
                    <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh]'}>
                        Rap
                    </h3>
                </div>
            </div>

            {/* genre bar 3*/}
            <div className={'grid relative row-[3_/_span_7] col-[15_/_span_1] z-20'}>
                <div className={'absolute inset-0 z-20 block'}>
                    {/* genre bar*/}
                    <div className={'relative h-[50vh] overflow-hidden bg-gray-700 rounded-lg'}>
                        <span className={'h-[7.8vh] flex justify-center items-center transition'}> 30% </span>
                        {/*   genre bar level*/}
                        <div style={{height: '28%'}} className={'absolute right-0 bottom-0 left-0 rounded-lg bg-gradient-to-t from-red-200 via-red-400 to-blue-500 origin-bottom'}/>
                    </div>
                    <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh]'}>
                        Rap
                    </h3>
                </div>
            </div>

            {/* genre bar 4*/}
            <div className={'grid relative row-[3_/_span_7] col-[17_/_span_1] z-20'}>
                <div className={'absolute inset-0 z-20 block'}>
                    {/* genre bar*/}
                    <div className={'relative h-[50vh] overflow-hidden bg-gray-700 rounded-lg'}>
                        <span className={'h-[7.8vh] flex justify-center items-center transition'}> 30% </span>
                        {/*   genre bar level*/}
                        <div style={{height: '16%'}} className={'absolute right-0 bottom-0 left-0 rounded-lg bg-gradient-to-t from-yellow-200 via-green-400 to-green-500 origin-bottom'}/>
                    </div>
                    <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh]'}>
                        Rap
                    </h3>
                </div>
            </div>

            {/* genre bar 5*/}
            <div className={'grid relative row-[3_/_span_7] col-[17_/_span_1] z-20'}>
                <div className={'absolute inset-0 z-20 block'}>
                    {/* genre bar*/}
                    <div className={'relative h-[50vh] overflow-hidden bg-gray-700 rounded-lg'}>
                        <span className={'h-[7.8vh] flex justify-center items-center transition'}> 30% </span>
                        {/*   genre bar level*/}
                        <div style={{height: '8%'}} className={'absolute right-0 bottom-0 left-0 rounded-lg bg-gradient-to-t from-yellow-200 via-green-400 to-green-500 origin-bottom'}/>
                    </div>
                    <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh]'}>
                        Rap
                    </h3>
                </div>
            </div>

        </div>
    );
}