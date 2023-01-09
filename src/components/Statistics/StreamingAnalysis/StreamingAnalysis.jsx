import React from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from "chart.js/auto";
import { Radar } from "react-chartjs-2";

import {RadarData, RadarOptions} from "./RadarConfig";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export const StreamingAnalysis = () => {

    return (
        <div className={'grid grid-cols-19 grid-rows-10 h-[100vh] w-[160vh] text-white'}>
            {/*summary*/}
            <div className={'grid grid-cols-7 relative col-start-3 col-span-7 row-start-4 row-span-6 z-20'}>
                <div className={'absolute inset-0 z-20 leading-6'}>
                    <h1 className={'my-5 font-black text-7xl text-white'}>
                    <span className={'inline-block pr-[5vh]'}>
                        <span> Analysis on </span><br/>
                        <span className={'break-words text-green-400'}> how you listen. </span>
                        <br/>
                    </span>
                    </h1>
                    <p className={'font-light text-xl text-gray-100 pr-[10vh]'}>
                    <span className={'inline-block leading-loose'}>
                        Audio analysis on how you listen using Spotify's AI, based on your
                        top 50 tracks
                        {/*Looks like you're a huge {top_genres[0].name} fan. This appears in {top_genres[0].percentage}% of your top tracks. Nice one!*/}
                    </span>
                    </p>
                </div>
            </div>

            <div className={'grid relative grid-cols-6 row-[3_/_span_7] col-[13_/_span_7] '}>
                <div className={'absolute inset-0 z-20'}>
                    <Radar data={ RadarData } options={ RadarOptions }/>

                </div>
            </div>
        </div>
    );
}