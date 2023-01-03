import React from 'react';
import { useDataLayerValue } from "../../../../utils/DataLayer";
import {PlayIcon} from "@heroicons/react/24/solid";
export const TopTracks = ({children}) => {

    const [{top_tracks_short}, dispatch] = useDataLayerValue();

    const top_tracks = top_tracks_short
    return (
        <div className={"grid grid-cols-33 grid-rows-10 h-section w-[330vh]"}>
            {/*summary*/}
            <div className={'grid grid-cols-7 relative col-start-3 col-span-7 row-start-4 row-span-6 z-20'}>
                <div className={'absolute inset-0 z-20 leading-6'}>
                    <h1 className={'my-5 font-black text-7xl text-white'}>
                    <span className={'inline-block pr-[5vh]'}>
                        <span className={'break-words text-green-400'}> {top_tracks[0]?.artists[0].name}</span>
                        <span> has been on repeat</span>
                        <br/>
                    </span>
                    </h1>
                    <p className={'font-light text-xl text-gray-100 pr-[10vh]'}>
                    <span className={'inline-block leading-loose'}>
                        Yeah, you have other songs you like to bump, but {top_tracks[0]?.name} by {top_tracks[0].artists[0].name} truly hit some chords with you.
                    </span>
                    </p>
                </div>
            </div>

            {/*top track 1*/}
            <div className={'grid relative row-start-3 row-span-6 col-start-11 col-span-5 '}>
                {/*track card*/}
                <div className={'absolute inset-0 z-20'}>
                    {/*quick info*/}
                    <div className={'quick-info absolute block -left-10'}>
                        <div className={'flex flex-col items-start'}>
                            <span>#1</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="30" width="30"><g opacity="1"><g><path fill="rgb(255,0,46)" fillOpacity="1" opacity="1" fillRule="evenodd" d="M7,5 L23,5 C24.103830337524414,5 25,5.896170139312744 25,7 L25,23 C25,24.103830337524414 24.103830337524414,25 23,25 L7,25 C5.896170139312744,25 5,24.103830337524414 5,23 L5,7 C5,5.896170139312744 5.896170139312744,5 7,5 L7.818181991577148,6.818181991577148 L22.18181800842285,6.818181991577148 C22.733734130859375,6.818181991577148 23.18181800842285,7.266266822814941 23.18181800842285,7.818181991577148 L23.18181800842285,22.18181800842285 C23.18181800842285,22.733734130859375 22.733734130859375,23.18181800842285 22.18181800842285,23.18181800842285 L7.818181991577148,23.18181800842285 C7.266266822814941,23.18181800842285 6.818181991577148,22.733734130859375 6.818181991577148,22.18181800842285 L6.818181991577148,7.818181991577148 C6.818181991577148,7.266266822814941 7.266266822814941,6.818181991577148 7.818181991577148,6.818181991577148 L12.062560081481934,19.628097534179688 L17.93743896484375,19.628097534179688 L17.93743896484375,17.6698055267334 L14.125295639038086,17.6698055267334 L14.125295639038086,15.894287109375 L17.57189178466797,15.894287109375 L17.57189178466797,14.079602241516113 L14.125295639038086,14.079602241516113 L14.125295639038086,12.317138671875 L17.92438316345215,12.317138671875 L17.92438316345215,10.37190055847168 L12.062560081481934,10.37190055847168 L12.062560081481934,19.628097534179688 L7,5Z"></path></g></g></svg>
                            </span>
                        </div>
                    </div>
                    {/*album cover*/}
                    <div className={'relative h-[50vh]'}>
                        <div
                            style={{backgroundImage: `url(${top_tracks[0].album.images[0].url})`}}
                            className={'absolute h-full w-full bg-cover bg-center'}>
                        </div>
                    </div>
                    {/*track info*/}
                    <div className={'flex  items-center my-6 '}>
                        <div className={'border-2 border-green-400 h-12 w-12 rounded-full '}>
                            <PlayIcon className={'ml-2 mt-1.5 h-8 w-8 text-green-400'}/>
                        </div>
                        <div className={'pl-4 overflow-hidden w-3/4 flex flex-col content-center space-y-1'}>
                            <h2 className={'font-bold truncate text-ellipsis lg:text-2xl 2xl:text-4xl whitespace-nowrap'}>
                                {top_tracks[0]?.name}
                            </h2>
                            <h3 className={'text-gray-400'}>
                                <span className={''}> {top_tracks[0].artists[0].name}</span>
                                <span>, </span>
                                <span> {top_tracks[0].artists[1].name}</span>
                            </h3>
                        </div>

                    </div>

                </div>

            </div>

            {/*top track 2*/}
            <div className={'grid relative row-start-4 row-span-6 col-[17_/_span_3] '}>
                {/*track card*/}
                <div className={'absolute inset-0 z-20'}>
                    {/*quick info*/}
                    <div className={'quick-info absolute block -left-10'}>
                        <div className={'flex flex-col items-start'}>
                            <span>#2</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="30" width="30"><g opacity="1"><g><path fill="rgb(255,0,46)" fillOpacity="1" opacity="1" fillRule="evenodd" d="M7,5 L23,5 C24.103830337524414,5 25,5.896170139312744 25,7 L25,23 C25,24.103830337524414 24.103830337524414,25 23,25 L7,25 C5.896170139312744,25 5,24.103830337524414 5,23 L5,7 C5,5.896170139312744 5.896170139312744,5 7,5 L7.818181991577148,6.818181991577148 L22.18181800842285,6.818181991577148 C22.733734130859375,6.818181991577148 23.18181800842285,7.266266822814941 23.18181800842285,7.818181991577148 L23.18181800842285,22.18181800842285 C23.18181800842285,22.733734130859375 22.733734130859375,23.18181800842285 22.18181800842285,23.18181800842285 L7.818181991577148,23.18181800842285 C7.266266822814941,23.18181800842285 6.818181991577148,22.733734130859375 6.818181991577148,22.18181800842285 L6.818181991577148,7.818181991577148 C6.818181991577148,7.266266822814941 7.266266822814941,6.818181991577148 7.818181991577148,6.818181991577148 L12.062560081481934,19.628097534179688 L17.93743896484375,19.628097534179688 L17.93743896484375,17.6698055267334 L14.125295639038086,17.6698055267334 L14.125295639038086,15.894287109375 L17.57189178466797,15.894287109375 L17.57189178466797,14.079602241516113 L14.125295639038086,14.079602241516113 L14.125295639038086,12.317138671875 L17.92438316345215,12.317138671875 L17.92438316345215,10.37190055847168 L12.062560081481934,10.37190055847168 L12.062560081481934,19.628097534179688 L7,5Z"></path></g></g></svg>
                            </span>
                        </div>
                    </div>
                    {/*album cover*/}
                    <div className={'relative h-[30vh]'}>
                        <div
                            style={{backgroundImage: `url(${top_tracks[1].album.images[0].url})`}}
                            className={'absolute h-full w-full bg-cover bg-center'}>
                        </div>
                    </div>
                    {/*track info*/}
                    <div className={'flex  items-center my-6 '}>
                        <div className={'border-2 border-green-400 h-12 w-12 rounded-full '}>
                            <PlayIcon className={'ml-2 mt-1.5 h-8 w-8 text-green-400'}/>
                        </div>
                        <div className={'pl-4 overflow-hidden w-3/4 flex flex-col content-center space-y-1'}>
                            <h2 className={'font-bold truncate text-ellipsis lg:text-2xl 2xl:text-4xl whitespace-nowrap'}>
                                {top_tracks[1].name}
                            </h2>
                            <h3 className={'text-gray-400'}>
                                <span className={''}> {top_tracks[1].artists[0].name}</span>
                                <span>, </span>
                                <span> {top_tracks[1].artists[1].name}</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/*top track 3*/}
            <div className={'grid relative row-start-3 row-span-6 col-[21_/_span_3] '}>
                {/*track card*/}
                <div className={'absolute inset-0 z-20'}>
                    {/*quick info*/}
                    <div className={'quick-info absolute block -left-10'}>
                        <div className={'flex flex-col items-start'}>
                            <span>#3</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="30" width="30"><g opacity="1"><g><path fill="rgb(255,0,46)" fillOpacity="1" opacity="1" fillRule="evenodd" d="M7,5 L23,5 C24.103830337524414,5 25,5.896170139312744 25,7 L25,23 C25,24.103830337524414 24.103830337524414,25 23,25 L7,25 C5.896170139312744,25 5,24.103830337524414 5,23 L5,7 C5,5.896170139312744 5.896170139312744,5 7,5 L7.818181991577148,6.818181991577148 L22.18181800842285,6.818181991577148 C22.733734130859375,6.818181991577148 23.18181800842285,7.266266822814941 23.18181800842285,7.818181991577148 L23.18181800842285,22.18181800842285 C23.18181800842285,22.733734130859375 22.733734130859375,23.18181800842285 22.18181800842285,23.18181800842285 L7.818181991577148,23.18181800842285 C7.266266822814941,23.18181800842285 6.818181991577148,22.733734130859375 6.818181991577148,22.18181800842285 L6.818181991577148,7.818181991577148 C6.818181991577148,7.266266822814941 7.266266822814941,6.818181991577148 7.818181991577148,6.818181991577148 L12.062560081481934,19.628097534179688 L17.93743896484375,19.628097534179688 L17.93743896484375,17.6698055267334 L14.125295639038086,17.6698055267334 L14.125295639038086,15.894287109375 L17.57189178466797,15.894287109375 L17.57189178466797,14.079602241516113 L14.125295639038086,14.079602241516113 L14.125295639038086,12.317138671875 L17.92438316345215,12.317138671875 L17.92438316345215,10.37190055847168 L12.062560081481934,10.37190055847168 L12.062560081481934,19.628097534179688 L7,5Z"></path></g></g></svg>
                            </span>
                        </div>
                    </div>
                    {/*album cover*/}
                    <div className={'relative h-[30vh]'}>
                        <div
                            style={{backgroundImage: `url(${top_tracks[2].album.images[0].url})`}}
                            className={'absolute h-full w-full bg-cover bg-center'}>
                        </div>
                    </div>
                    {/*track info*/}
                    <div className={'flex  items-center my-6 '}>
                        <div className={'border-2 border-green-400 h-12 w-12 rounded-full '}>
                            <PlayIcon className={'ml-2 mt-1.5 h-8 w-8 text-green-400'}/>
                        </div>
                        <div className={'pl-4 overflow-hidden w-3/4 flex flex-col content-center space-y-1'}>
                            <h2 className={'font-bold truncate text-ellipsis lg:text-2xl 2xl:text-4xl whitespace-nowrap'}>
                                {top_tracks[2]?.name}
                            </h2>
                            <h3 className={'text-gray-400'}>
                                <span className={''}> {top_tracks[2].artists[0].name}</span>
                                <span>, </span>
                                <span> {top_tracks[2].artists[1].name}</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/*top track 4*/}
            <div className={'grid relative row-start-4 row-span-6 col-[25_/_span_3] '}>
                {/*track card*/}
                <div className={'absolute inset-0 z-20'}>
                    {/*quick info*/}
                    <div className={'quick-info absolute block -left-10'}>
                        <div className={'flex flex-col items-start'}>
                            <span>#4</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="30" width="30"><g opacity="1"><g><path fill="rgb(255,0,46)" fillOpacity="1" opacity="1" fillRule="evenodd" d="M7,5 L23,5 C24.103830337524414,5 25,5.896170139312744 25,7 L25,23 C25,24.103830337524414 24.103830337524414,25 23,25 L7,25 C5.896170139312744,25 5,24.103830337524414 5,23 L5,7 C5,5.896170139312744 5.896170139312744,5 7,5 L7.818181991577148,6.818181991577148 L22.18181800842285,6.818181991577148 C22.733734130859375,6.818181991577148 23.18181800842285,7.266266822814941 23.18181800842285,7.818181991577148 L23.18181800842285,22.18181800842285 C23.18181800842285,22.733734130859375 22.733734130859375,23.18181800842285 22.18181800842285,23.18181800842285 L7.818181991577148,23.18181800842285 C7.266266822814941,23.18181800842285 6.818181991577148,22.733734130859375 6.818181991577148,22.18181800842285 L6.818181991577148,7.818181991577148 C6.818181991577148,7.266266822814941 7.266266822814941,6.818181991577148 7.818181991577148,6.818181991577148 L12.062560081481934,19.628097534179688 L17.93743896484375,19.628097534179688 L17.93743896484375,17.6698055267334 L14.125295639038086,17.6698055267334 L14.125295639038086,15.894287109375 L17.57189178466797,15.894287109375 L17.57189178466797,14.079602241516113 L14.125295639038086,14.079602241516113 L14.125295639038086,12.317138671875 L17.92438316345215,12.317138671875 L17.92438316345215,10.37190055847168 L12.062560081481934,10.37190055847168 L12.062560081481934,19.628097534179688 L7,5Z"></path></g></g></svg>
                            </span>
                        </div>
                    </div>
                    {/*album cover*/}
                    <div className={'relative h-[30vh]'}>
                        <div
                            style={{backgroundImage: `url(${top_tracks[3].album.images[0].url})`}}
                            className={'absolute h-full w-full bg-cover bg-center'}>
                        </div>
                    </div>
                    {/*track info*/}
                    <div className={'flex  items-center my-6 '}>
                        <div className={'border-2 border-green-400 h-12 w-12 rounded-full '}>
                            <PlayIcon className={'ml-2 mt-1.5 h-8 w-8 text-green-400'}/>
                        </div>
                        <div className={'pl-4 overflow-hidden w-3/4 flex flex-col content-center space-y-1'}>
                            <h2 className={'font-bold truncate text-ellipsis lg:text-2xl 2xl:text-4xl whitespace-nowrap'}>
                                {top_tracks[3]?.name}
                            </h2>
                            <h3 className={'text-gray-400'}>
                                <span className={''}> {top_tracks[3].artists[0].name}</span>
                                { top_tracks[3].length > 1 ?
                                    <div>
                                        <span>, </span>
                                        <span> {top_tracks[3].artists[1].name}</span>
                                    </div>
                                    : ''
                                }
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/*top track 5*/}
            <div className={'grid relative row-[2_/_span_2] col-[29_/_span_3] '}>
                {/*track card*/}
                <div className={'absolute inset-0 z-20'}>
                    {/*quick info*/}
                    <div className={'quick-info absolute block -left-10'}>
                        <div className={'flex flex-col items-start'}>
                            <span>#5</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="30" width="30"><g opacity="1"><g><path fill="rgb(255,0,46)" fillOpacity="1" opacity="1" fillRule="evenodd" d="M7,5 L23,5 C24.103830337524414,5 25,5.896170139312744 25,7 L25,23 C25,24.103830337524414 24.103830337524414,25 23,25 L7,25 C5.896170139312744,25 5,24.103830337524414 5,23 L5,7 C5,5.896170139312744 5.896170139312744,5 7,5 L7.818181991577148,6.818181991577148 L22.18181800842285,6.818181991577148 C22.733734130859375,6.818181991577148 23.18181800842285,7.266266822814941 23.18181800842285,7.818181991577148 L23.18181800842285,22.18181800842285 C23.18181800842285,22.733734130859375 22.733734130859375,23.18181800842285 22.18181800842285,23.18181800842285 L7.818181991577148,23.18181800842285 C7.266266822814941,23.18181800842285 6.818181991577148,22.733734130859375 6.818181991577148,22.18181800842285 L6.818181991577148,7.818181991577148 C6.818181991577148,7.266266822814941 7.266266822814941,6.818181991577148 7.818181991577148,6.818181991577148 L12.062560081481934,19.628097534179688 L17.93743896484375,19.628097534179688 L17.93743896484375,17.6698055267334 L14.125295639038086,17.6698055267334 L14.125295639038086,15.894287109375 L17.57189178466797,15.894287109375 L17.57189178466797,14.079602241516113 L14.125295639038086,14.079602241516113 L14.125295639038086,12.317138671875 L17.92438316345215,12.317138671875 L17.92438316345215,10.37190055847168 L12.062560081481934,10.37190055847168 L12.062560081481934,19.628097534179688 L7,5Z"></path></g></g></svg>
                            </span>
                        </div>
                    </div>
                    {/*album cover*/}
                    <div className={'relative h-[30vh]'}>
                        <div
                            style={{backgroundImage: `url(${top_tracks[4].album.images[0].url})`}}
                            className={'absolute h-full w-full bg-cover bg-center'}>
                        </div>
                    </div>
                    {/*track info*/}
                    <div className={'flex  items-center my-6 '}>
                        <div className={'border-2 border-green-400 h-12 w-12 rounded-full '}>
                            <PlayIcon className={'ml-2 mt-1.5 h-8 w-8 text-green-400'}/>
                        </div>
                        <div className={'pl-4 overflow-hidden w-3/4 flex flex-col content-center space-y-1'}>
                            <h2 className={'font-bold truncate text-ellipsis lg:text-2xl 2xl:text-4xl whitespace-nowrap'}>
                                {top_tracks[4]?.name}
                            </h2>
                            <h3 className={'text-gray-400'}>
                                <span className={''}> {top_tracks[4].artists[0].name}</span>
                                { top_tracks[4].length > 1 ?
                                    <div>
                                        <span>, </span>
                                        <span> {top_tracks[4].artists[1].name}</span>
                                    </div>
                                    : ''
                                }
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/*suggested playlist*/}
            <div className={'grid relative row-[8_/_span_2] col-[29_/_span_4] bg-gradient-to-l from-green-500 items-center rounded-xl '}>
                {/*track card*/}
                {/*<div className={'absolute inset-0 z-20'}>*/}
                {/*    /!*quick info*!/*/}
                {/*    <div className={'quick-info absolute block -left-10'}>*/}
                {/*        <div className={'flex flex-col items-start'}>*/}
                {/*            <span>#4</span>*/}
                {/*            <span>*/}
                {/*                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="30" width="30"><g opacity="1"><g><path fill="rgb(255,0,46)" fillOpacity="1" opacity="1" fillRule="evenodd" d="M7,5 L23,5 C24.103830337524414,5 25,5.896170139312744 25,7 L25,23 C25,24.103830337524414 24.103830337524414,25 23,25 L7,25 C5.896170139312744,25 5,24.103830337524414 5,23 L5,7 C5,5.896170139312744 5.896170139312744,5 7,5 L7.818181991577148,6.818181991577148 L22.18181800842285,6.818181991577148 C22.733734130859375,6.818181991577148 23.18181800842285,7.266266822814941 23.18181800842285,7.818181991577148 L23.18181800842285,22.18181800842285 C23.18181800842285,22.733734130859375 22.733734130859375,23.18181800842285 22.18181800842285,23.18181800842285 L7.818181991577148,23.18181800842285 C7.266266822814941,23.18181800842285 6.818181991577148,22.733734130859375 6.818181991577148,22.18181800842285 L6.818181991577148,7.818181991577148 C6.818181991577148,7.266266822814941 7.266266822814941,6.818181991577148 7.818181991577148,6.818181991577148 L12.062560081481934,19.628097534179688 L17.93743896484375,19.628097534179688 L17.93743896484375,17.6698055267334 L14.125295639038086,17.6698055267334 L14.125295639038086,15.894287109375 L17.57189178466797,15.894287109375 L17.57189178466797,14.079602241516113 L14.125295639038086,14.079602241516113 L14.125295639038086,12.317138671875 L17.92438316345215,12.317138671875 L17.92438316345215,10.37190055847168 L12.062560081481934,10.37190055847168 L12.062560081481934,19.628097534179688 L7,5Z"></path></g></g></svg>*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    /!*album cover*!/*/}
                {/*    <div className={'relative h-[30vh]'}>*/}
                {/*        <div*/}
                {/*            style={{backgroundImage: `url(${top_tracks?.items[3].album.images[0].url})`}}*/}
                {/*            className={'absolute h-full w-full bg-cover bg-center'}>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    /!*track info*!/*/}
                {/*    <div className={'flex  items-center my-6 '}>*/}
                {/*        <div className={'border-2 border-green-400 h-12 w-12 rounded-full '}>*/}
                {/*            <PlayIcon className={'ml-2 mt-1.5 h-8 w-8 text-green-400'}/>*/}
                {/*        </div>*/}
                {/*        <div className={'pl-4 overflow-hidden w-3/4 flex flex-col content-center space-y-1'}>*/}
                {/*            <h2 className={'font-bold truncate text-ellipsis lg:text-2xl 2xl:text-4xl whitespace-nowrap'}>*/}
                {/*                {top_tracks?.items[3]?.name}*/}
                {/*            </h2>*/}
                {/*            <h3 className={'text-gray-400'}>*/}
                {/*                <span className={''}> {top_tracks?.items[3].artists[0].name}</span>*/}
                {/*                { top_tracks?.items[3].length > 1 ?*/}
                {/*                    <div>*/}
                {/*                        <span>, </span>*/}
                {/*                        <span> {top_tracks?.items[3].artists[1].name}</span>*/}
                {/*                    </div>*/}
                {/*                    : ''*/}
                {/*                }*/}
                {/*            </h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {/*suggested playlist*/}
            <div className={'grid relative row-[7_/_span_1] col-[33_/_span_1] bg-gray-500 items-center rounded-xl '}>
                {/*track card*/}
                {/*<div className={'absolute inset-0 z-20'}>*/}
                {/*    /!*quick info*!/*/}
                {/*    <div className={'quick-info absolute block -left-10'}>*/}
                {/*        <div className={'flex flex-col items-start'}>*/}
                {/*            <span>#4</span>*/}
                {/*            <span>*/}
                {/*                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="30" width="30"><g opacity="1"><g><path fill="rgb(255,0,46)" fillOpacity="1" opacity="1" fillRule="evenodd" d="M7,5 L23,5 C24.103830337524414,5 25,5.896170139312744 25,7 L25,23 C25,24.103830337524414 24.103830337524414,25 23,25 L7,25 C5.896170139312744,25 5,24.103830337524414 5,23 L5,7 C5,5.896170139312744 5.896170139312744,5 7,5 L7.818181991577148,6.818181991577148 L22.18181800842285,6.818181991577148 C22.733734130859375,6.818181991577148 23.18181800842285,7.266266822814941 23.18181800842285,7.818181991577148 L23.18181800842285,22.18181800842285 C23.18181800842285,22.733734130859375 22.733734130859375,23.18181800842285 22.18181800842285,23.18181800842285 L7.818181991577148,23.18181800842285 C7.266266822814941,23.18181800842285 6.818181991577148,22.733734130859375 6.818181991577148,22.18181800842285 L6.818181991577148,7.818181991577148 C6.818181991577148,7.266266822814941 7.266266822814941,6.818181991577148 7.818181991577148,6.818181991577148 L12.062560081481934,19.628097534179688 L17.93743896484375,19.628097534179688 L17.93743896484375,17.6698055267334 L14.125295639038086,17.6698055267334 L14.125295639038086,15.894287109375 L17.57189178466797,15.894287109375 L17.57189178466797,14.079602241516113 L14.125295639038086,14.079602241516113 L14.125295639038086,12.317138671875 L17.92438316345215,12.317138671875 L17.92438316345215,10.37190055847168 L12.062560081481934,10.37190055847168 L12.062560081481934,19.628097534179688 L7,5Z"></path></g></g></svg>*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    /!*album cover*!/*/}
                {/*    <div className={'relative h-[30vh]'}>*/}
                {/*        <div*/}
                {/*            style={{backgroundImage: `url(${top_tracks?.items[3].album.images[0].url})`}}*/}
                {/*            className={'absolute h-full w-full bg-cover bg-center'}>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    /!*track info*!/*/}
                {/*    <div className={'flex  items-center my-6 '}>*/}
                {/*        <div className={'border-2 border-green-400 h-12 w-12 rounded-full '}>*/}
                {/*            <PlayIcon className={'ml-2 mt-1.5 h-8 w-8 text-green-400'}/>*/}
                {/*        </div>*/}
                {/*        <div className={'pl-4 overflow-hidden w-3/4 flex flex-col content-center space-y-1'}>*/}
                {/*            <h2 className={'font-bold truncate text-ellipsis lg:text-2xl 2xl:text-4xl whitespace-nowrap'}>*/}
                {/*                {top_tracks?.items[3]?.name}*/}
                {/*            </h2>*/}
                {/*            <h3 className={'text-gray-400'}>*/}
                {/*                <span className={''}> {top_tracks?.items[3].artists[0].name}</span>*/}
                {/*                { top_tracks?.items[3].length > 1 ?*/}
                {/*                    <div>*/}
                {/*                        <span>, </span>*/}
                {/*                        <span> {top_tracks?.items[3].artists[1].name}</span>*/}
                {/*                    </div>*/}
                {/*                    : ''*/}
                {/*                }*/}
                {/*            </h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>


        </div>
    )
}