import React from "react";

export const SummaryData = ({header, artist}) => {
    return(
        <h1 className={'my-5 font-black text-7xl text-white'}>
            <span className={'inline-block pr-[5vh]'}>
                <span> {header} </span>
                { artist ? <span className={'break-words text-green-400'}> {artist} </span> : '' }
                <br/>
            </span>
        </h1>
    )
}

export const SummaryText = ({summary}) => {
    return(
        <p className={'font-light text-xl text-gray-100 pr-[10vh]'}>
            <span className={'inline-block leading-loose'}>
                {summary}
            </span>
        </p>
    )
}