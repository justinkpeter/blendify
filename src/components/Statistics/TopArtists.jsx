import {useDataLayerValue} from "../../utils/DataLayer";
import React from "react";
import {ArtistCard} from "./TopArtist/ArtistCard";
import {TopArtistsWrapper} from "./TopArtist/TopArtistsWrapper";
import {TopArtistUserSummary} from "./SectionUserSummary/SectionUserSummary";

import '../../styles/ArtistCard.css';
import {SectionUserSummary} from "./SectionUserSummary/SectionUserSummary";
import {ArtistTile} from "./ArtistTile/ArtistTile";

export function TopArtists(props) {
    const [{top_artists, current_top_artist}, dispatch] = useDataLayerValue();
    const topArtist = top_artists.items[0].name;
    const topArtistData = top_artists.items[0];

    return (
        <div className={'bg-zinc-900'}>
            <TopArtistsWrapper>
                {/* icon ? */}
                <SectionUserSummary section={"Favorite Artists"} topArtist={topArtist}/>
                <ArtistTile
                    colStart={10}
                    colSpan={4}
                    rowStart={3}
                    rowSpan={4}
                    height={`h-[50vh]`}
                    width={`w-[40vh]`}
                    img={topArtistData.images[0].url}
                    title={topArtistData.name}
                    popularity={topArtistData.popularity}
                    followers={topArtistData.followers.total}
                    topTrack={current_top_artist?.track}
                />
                {/*<ArtistCard artistData={topArtistData}/>*/}

                <ArtistTile
                    colStart={15}
                    colSpan={3}
                    rowStart={4}
                    rowSpan={3}
                    img={topArtistData.images[1].url}
                    title={topArtistData.name}
                    popularity={topArtistData.popularity}
                    followers={topArtistData.followers.total}
                    topTrack={current_top_artist?.track}
                />

                <div className={"grid grid-cols-3 col-[15_/_span_3] row-[4_/_span_3] relative z-10 text-white"}>
                    <div className={'absolute inset-0 rounded-lg z-20 flex justify-between items-end p-6 overflow-hidden'}>
                        {topArtist && <img
                            src={topArtist && top_artists.items[1].images[0].url} alt={""}
                            className={"absolute top-0 left-0 object-cover object-center"}
                        />}
                        <div className={"text-2xl z-10"}>
                            <h3 className={'text-lg'}> #2 </h3>
                            <h2 className={'block font-bold'}>
                                <span className={'flex flex-col'}>
                                    <span className={'inline-block'}> { top_artists.items[1].name}</span>
                                </span>
                            </h2>
                        </div>
                        <div className={'absolute inset-0 z-[5] bg-gradient-to-t from-stone-800/60'}>
                            <div className={'z-[6] bg-red-900'}/>
                        </div>
                    </div>
                </div>


                <div className={"grid grid-cols-3 col-[18_/_span_3] row-[7_/_span_3] relative z-10 text-white"}>
                    <div className={'absolute inset-0 rounded-lg z-20 flex justify-between items-end p-6 overflow-hidden'}>
                        {topArtist && <img
                            src={topArtist && top_artists.items[2].images[0].url} alt={""}
                            className={"absolute top-0 left-0 object-cover object-center"}
                        />}
                        <div className={"text-2xl z-10"}>
                            <h3 className={'text-lg '}> #3 </h3>
                            <h2 className={'block font-bold'}>
                                <span className={'flex flex-col'}>
                                    <span className={'inline-block'}> { top_artists.items[2].name}</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>



                <div className={"grid grid-cols-3 col-[19_/_span_3] row-[3_/_span_3] relative z-10 text-white"}>
                    <div className={'absolute inset-0 rounded-lg z-20 flex justify-between items-end p-6 overflow-hidden'}>
                        {topArtist && <img
                            src={topArtist && top_artists.items[3].images[0].url} alt={""}
                            className={"absolute top-0 left-0 object-cover object-center"}
                        />}
                        <div className={"text-2xl z-10"}>
                            <h3 className={'text-lg '}> #4 </h3>
                            <h2 className={'block font-bold'}>
                                <span className={'flex flex-col'}>
                                    <span className={'inline-block'}> { top_artists.items[3].name}</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>


                <div className={"grid grid-cols-3 col-[23_/_span_3] row-[2_/_span_3] relative z-10 text-white"}>
                    <div className={'absolute inset-0 rounded-lg z-20 flex justify-between items-end p-6 overflow-hidden'}>
                        {topArtist && <img
                            src={topArtist && top_artists.items[4].images[0].url} alt={""}
                            className={"absolute top-0 left-0 object-cover object-center"}
                        />}
                        <div className={"text-2xl z-10"}>
                            <h3 className={'text-lg '}> #5 </h3>
                            <h2 className={'block font-bold'}>
                                <span className={'flex flex-col'}>
                                    <span className={'inline-block'}> { top_artists.items[4].name}</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>


                <div className={"grid grid-cols-1 col-[26_/span_1] row-[5_/_span_1] bg-zinc-700 items-center rounded-xl "}>
                    <div className={"justify-items-center text-white m-auto"}>
                        50
                    </div>
                </div>

                <div className={"grid grid-cols-1 col-[22_/span_4] row-[7_/_span_2] relative bg-gradient-to-l from-green-500 items-center rounded-xl "}>
                        <div className={'absolute inset-0 z-20 flex items-center overflow-hidden'}>
                            <div className={'absolute left-0 w-[30vh] h-[30vh]'}>
                                <div
                                    style={{backgroundImage: `url(${top_artists.items[0].images[0].url})`}}
                                    className={'absolute w-full h-full opacity-20 bg-cover bg-center origin-left'}>
                                </div>
                                <div
                                    style={{backgroundImage: `url(${top_artists.items[1].images[0].url})`}}
                                    className={'absolute w-full h-full opacity-20 bg-cover bg-center origin-left'}>
                                </div>
                                <div
                                    style={{backgroundImage: `url(${top_artists.items[2].images[0].url})`}}
                                    className={'absolute w-full h-full opacity-20 bg-cover bg-center origin-left'}>
                                </div>
                                <div
                                    style={{backgroundImage: `url(${top_artists.items[3].images[0].url})`}}
                                    className={'absolute w-full h-full opacity-20 bg-cover bg-center origin-left'}>
                                </div>
                            </div>
                            <div className={'h-full w-[30vh] h-[30vh] basis-[30vh] z-10 inline-flex flex-col justify-center pr-6 pb-2.5 pl-9 text-white'}>
                                <h4 className={'pl-2 text-base font-medium'}> Suggestion Playlist</h4>
                                <p  className={'pl-2 mt-1.5 text-2xl font-medium'}> A fresh playlist, just for you.</p>
                            </div>
                            <span className="flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                        </div>
                </div>
            </TopArtistsWrapper>
        </div>

    )
}