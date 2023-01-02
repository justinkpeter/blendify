import React from "react";
import '../../../styles/ArtistCard.css';
import {TopArtistsArtistInfo} from "./TopArtistsArtistInfo";

import {ArtistCardImage} from "./ArtistCard/ArtistCardImage";
import {ArtistCardTitle} from "./ArtistCard/ArtistCardTitle";
import {ArtistCardWrapper} from "./ArtistCard/ArtistCardWrapper";
import {ArtistCardBackdrop} from "./ArtistCard/ArtistCardBackdrop";


export function ArtistCard(props){

    return(
            <ArtistCardWrapper data={props}>
                <ArtistCardImage src={props.artistData.images[0].url}/>
                <ArtistCardTitle title={props.artistData.name}/>
                <ArtistCardBackdrop/>
                <TopArtistsArtistInfo popularity={"Lowkey"} followers={props.artistData.followers.total} topTrack={"Like Sand"}/>
            </ArtistCardWrapper>
    )
}