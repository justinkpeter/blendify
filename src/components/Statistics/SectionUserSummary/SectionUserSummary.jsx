import React from "react";
import {sections} from "../../../utils/sections";
import { SummaryData, SummaryText } from "./SummaryData";

export const SectionUserSummary = ({section, ...props}) => {

    let header = "";
    let summary = "";

    switch(section){
        case "Favorite Artists":
            if(props.topArtist){
                header = `Grooving to`;
                summary= `When it comes to your favorite artists to listen to, nobody does is like ${props.topArtist} for you`;
            }
            break;
    }

    return (
        <div className={'grid grid-cols-7 relative col-start-3 col-span-7 row-start-4 row-span-6 z-20'}>
            <div className={'absolute inset-0 z-20 leading-6'}>
                <SummaryData header={header} artist={props.topArtist}/>
                <SummaryText  summary={summary}/>
            </div>
        </div>
    );
}