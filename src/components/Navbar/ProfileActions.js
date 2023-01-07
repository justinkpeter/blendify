import React from "react";
import {useDataLayerValue} from "../../utils/DataLayer";

//icons and components
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreVertIconButton from "../MoreVertIconButton";


const ProfileAvatar = (props) => {

   const [{ user }] = useDataLayerValue();

   return(
       <div className="flex items-center">
           <label> {user?.display_name} </label>
           <label className="avatar pl-4">
               <div className="w-10 rounded-full">
                   <img src={user?.images[0].url}/>
               </div>
            </label>
       </div>
   )
}

export default function ProfileActions() {
    return (
        <div className="flex navbar-end pr-10 text-white">
            <ProfileAvatar name={"Bethany Davis"}/>
            <MoreVertIconButton/>
        </div>
    )
}