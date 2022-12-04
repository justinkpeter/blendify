import {Fragment, useEffect, useState} from "react";

import SearchIcon from '@mui/icons-material/Search';
import SearchInput from "../components/SearchInput";
import ProfileActions from "../components/ProfileActions";

export default function Navbar(props){
    const logout = () => {
        window.localStorage.removeItem("token")

    }

    const [profileToken, setProfileToken] = useState(props);
    console.log("props in nav bar", props)

    const handleOpenSidebar = () => {
        console.log('ummmmm')
    }

    useEffect(() => {
        setProfileToken(props);
    }, [props]);

    return(
        <div className="navbar pt-6 pb-2">
            <div className="w-24">
                <a className="btn btn-ghost normal-case text-xl">blendify</a>
            </div>
            <SearchInput/>
            <div className="w-full justify-end">
                <ProfileActions />
            </div>
        </div>
    )


}