import React from "react";
import {ArtistContentModal} from "./ArtistContentModal";


export const ArtistCardWrapper = ({data,children}) => {

    function handleModalEvent(e){
        e.preventDefault()
        document.getElementById('my-modal-3').checked = true
    }
    return(
        <div
            onMouseDownCapture={(e) => {handleModalEvent(e)}}
            className={'top-artists-cover col-start-10 col-4 row-start-3 row-span-4'}>
            {/*<ArtistContentModal data={data}/>*/}
            {children}
        </div>
    )
}