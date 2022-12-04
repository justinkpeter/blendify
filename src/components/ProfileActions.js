import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "../utils/DataLayer";

//icons and components
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreVertIconButton from "./MoreVertIconButton";


const ProfileAvatar = (props) => {

   const [{ user }] = useDataLayerValue();

   return(
       <div className={"flex place-items-center space-x-2"}>
           <label> {user?.display_name} </label>
           <label className="avatar">
               <div className="w-10 rounded-full">
                   <img src={user?.images[0].url}/>
               </div>
           </label>
       </div>
   )
}

export default function ProfileActions() {
    return (
        <div className="w-full">
            <div className="dropdown dropdown-end flex place-items-center space-x-1 justify-end">
                <ProfileAvatar name={"Bethany Davis"}/>
                <MoreVertIconButton/>
            </div>
        </div>
    )
}