import {useDataLayerValue} from "../../../utils/DataLayer";
import React, {useEffect, useState} from "react";
import {PlayIcon} from "@heroicons/react/24/solid";
import SpotifyWebApi from "spotify-web-api-js";
import {GenreBar} from "./GenreBar";

const spotify = new SpotifyWebApi()



export const TopGenres = ({children}) => {

    const [genres, setGenres] = useState([])
    const  [{token, top_genres}, dispatch] = useDataLayerValue();

    spotify.setAccessToken(token)


    return (
        <div className={"grid grid-cols-19 grid-rows-10 h-section w-[190vh] text-white"}>
            <div className={'grid relative row-[3_/_span_1] col-[3_/_span_1]  rounded-lg overflow-hidden'}>
                <span style={{background: 'linear-gradient(136.15deg, rgb(204, 174, 85) 0%, rgb(149, 105, 11) 100%)'}}/>
                <span className={'absolute'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130" width="130" height="130"><defs><radialGradient id="LjBS7GDHVc23" cx="0.52" cy="0.49" r="0.425"><stop offset="0" stop-color="#FFF" stop-opacity="0.4"></stop><stop offset="1" stop-color="#FFF" stop-opacity="0"></stop></radialGradient></defs><path fill="url(#LjBS7GDHVc23)" fill-rule="evenodd" d="M65 4.333C31.633 4.333 4.333 31.633 4.333 65c0 33.367 27.3 60.667 60.667 60.667 33.367 0 60.667-27.3 60.667-60.667 0-33.367-27.3-60.667-60.667-60.667zM65 93.6c-15.73 0-28.6-12.87-28.6-28.6 0-15.73 12.87-28.6 28.6-28.6 15.73 0 28.6 12.87 28.6 28.6 0 15.73-12.87 28.6-28.6 28.6zM52.867 65c0 6.673 5.46 12.133 12.133 12.133 6.673 0 12.133-5.46 12.133-12.133 0-6.673-5.46-12.133-12.133-12.133-6.673 0-12.133 5.46-12.133 12.133z"></path></svg>
                </span>
            </div>

            {/*summary*/}
            <div className={'grid grid-cols-7 relative col-start-3 col-span-7 row-start-4 row-span-6 z-20'}>
                <div className={'absolute inset-0 z-20 leading-6'}>
                    <h1 className={'my-5 font-black text-7xl text-white'}>
                    <span className={'inline-block pr-[5vh]'}>
                        <span> {top_genres[0].name} </span>
                        <span className={'break-words text-green-400'}> slaps hard. </span>
                        <br/>
                    </span>
                    </h1>
                    <p className={'font-light text-xl text-gray-100 pr-[10vh]'}>
                    <span className={'inline-block leading-loose'}>
                        Looks like you're a huge {top_genres[0].name} fan. This appears in {top_genres[0].percentage}% of your top tracks. Nice one!
                    </span>
                    </p>
                </div>
            </div>

            {top_genres.map((genre, index) => (
                    <GenreBar key={index} name={genre.name} percentage={genre.percentage} index={index}/>
                ))}

            {/*/!* genre bar 1*!/*/}
            {/*<div className={'grid relative row-[3_/_span_7] col-[11_/_span_1] z-20'}>*/}
            {/*    <div className={'absolute inset-0 z-20 block'}>*/}
            {/*        /!* genre bar*!/*/}
            {/*        <div className={'relative h-[50vh] overflow-hidden bg-gray-700 rounded-lg'}>*/}
            {/*            <span className={'h-[7.8vh] flex justify-center items-center transition'}> {top_genres[0].percentage}% </span>*/}
            {/*            /!*   genre bar level*!/*/}
            {/*            <div style={{height: `${top_genres[0].percentage}%`}} className={'absolute right-0 bottom-0 left-0 rounded-lg bg-gradient-to-t from-amber-200 to-yellow-500 origin-bottom'}/>*/}
            {/*        </div>*/}
            {/*        <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh]'}>*/}
            {/*            {top_genres[0].name}*/}
            {/*        </h3>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*/!* genre bar 2*!/*/}
            {/*<div className={'grid relative row-[3_/_span_7] col-[13_/_span_1] z-20'}>*/}
            {/*    <div className={'absolute inset-0 z-20 block'}>*/}
            {/*        /!* genre bar*!/*/}
            {/*        <div className={'relative h-[50vh] overflow-hidden bg-gray-700 rounded-lg'}>*/}
            {/*            <span className={'h-[7.8vh] flex justify-center items-center transition'}> 30% </span>*/}
            {/*            /!*   genre bar level*!/*/}
            {/*            <div style={{height: '38%'}} className={'absolute right-0 bottom-0 left-0 rounded-lg bg-gradient-to-t from-green-200 via-green-400 to-green-500 origin-bottom'}/>*/}
            {/*        </div>*/}
            {/*        <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh]'}>*/}
            {/*            Rap*/}
            {/*        </h3>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*/!* genre bar 3*!/*/}
            {/*<div className={'grid relative row-[3_/_span_7] col-[15_/_span_1] z-20'}>*/}
            {/*    <div className={'absolute inset-0 z-20 block'}>*/}
            {/*        /!* genre bar*!/*/}
            {/*        <div className={'relative h-[50vh] overflow-hidden bg-gray-700 rounded-lg'}>*/}
            {/*            <span className={'h-[7.8vh] flex justify-center items-center transition'}> 30% </span>*/}
            {/*            /!*   genre bar level*!/*/}
            {/*            <div style={{height: '28%'}} className={'absolute right-0 bottom-0 left-0 rounded-lg bg-gradient-to-t from-red-200 via-red-400 to-blue-500 origin-bottom'}/>*/}
            {/*        </div>*/}
            {/*        <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh]'}>*/}
            {/*            Rap*/}
            {/*        </h3>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*/!* genre bar 4*!/*/}
            {/*<div className={'grid relative row-[3_/_span_7] col-[17_/_span_1] z-20'}>*/}
            {/*    <div className={'absolute inset-0 z-20 block'}>*/}
            {/*        /!* genre bar*!/*/}
            {/*        <div className={'relative h-[50vh] overflow-hidden bg-gray-700 rounded-lg'}>*/}
            {/*            <span className={'h-[7.8vh] flex justify-center items-center transition'}> 30% </span>*/}
            {/*            /!*   genre bar level*!/*/}
            {/*            <div style={{height: '16%'}} className={'absolute right-0 bottom-0 left-0 rounded-lg bg-gradient-to-t from-yellow-200 via-green-400 to-green-500 origin-bottom'}/>*/}
            {/*        </div>*/}
            {/*        <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh]'}>*/}
            {/*            Rap*/}
            {/*        </h3>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*/!* genre bar 5*!/*/}
            {/*<div className={'grid relative row-[3_/_span_7] col-[19_/_span_1] z-20'}>*/}
            {/*    <div className={'absolute inset-0 z-20 block'}>*/}
            {/*        /!* genre bar*!/*/}
            {/*        <div className={'relative h-[50vh] overflow-hidden bg-gray-700 rounded-lg'}>*/}
            {/*            <span className={'h-[7.8vh] flex justify-center items-center transition'}> 30% </span>*/}
            {/*            /!*   genre bar level*!/*/}
            {/*            <div style={{height: '8%'}} className={'absolute right-0 bottom-0 left-0 rounded-lg bg-gradient-to-t from-yellow-200 via-green-400 to-green-500 origin-bottom'}/>*/}
            {/*        </div>*/}
            {/*        <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh]'}>*/}
            {/*            Rap*/}
            {/*        </h3>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
}