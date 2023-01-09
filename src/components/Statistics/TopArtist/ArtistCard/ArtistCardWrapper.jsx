import React from "react";
import {ArtistContentModal} from "./ArtistContentModal";


export const ArtistCardWrapper = ({data,children}) => {

    function handleModalEvent(e){
        e.preventDefault()
        document.getElementById('my-modal-3').checked = true


    }

    // col-[15_/_span_3] row-[4_/_span_3]
    return(
        <div
            onMouseDownCapture={(e) => {handleModalEvent(e)}}
            className={'top-artists-cover col-[10_/_span_4] row-[3_/_span_4]'}>
            {/*<ArtistContentModal data={data}/>*/}
            {children}
        </div>
    )
}