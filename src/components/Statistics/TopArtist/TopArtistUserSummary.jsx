import React from "react";

export const TopArtistUserSummary = ({topArtist}) => {
    return (
        <div className={'grid grid-cols-7 relative col-start-3 col-span-7 row-start-4 row-span-6 z-20'}>
            <div className={'absolute inset-0 z-20 leading-6'}>
                <h1 className={'my-5 font-black text-7xl text-white'}>
                    <span className={'inline-block pr-[5vh]'}>
                        <span> Grooving to</span> <br/>
                        <span className={'break-words text-green-400'}> {topArtist}</span>
                    </span>
                </h1>
                <p className={'font-light text-xl text-gray-100 pr-[10vh]'}>
                    <span className={'inline-block leading-loose'}>
                    When it comes to your favorite artists to listen to,
                    nobody does is like {topArtist} for you!
                    </span>
                </p>
            </div>
        </div>

    )
}