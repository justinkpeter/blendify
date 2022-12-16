import React from 'react';
import LinkIcon from '@mui/icons-material/Link';
import ShareIcon from '@mui/icons-material/Share';

const IconButton = ({icon,label, text}) => {
    return(
        <div className="flex dropdown">
            <label tabIndex={0} className={"btn btn-ghost rounded-full m-1 flex gap-1 text-sm"}>
                {icon}
                {label}
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-5 shadow bg-base-100 rounded-box w-52">
                {text}
            </ul>
        </div>
    )
}

function AboutButtonGroup() {
    const navbarText = {
        about: "About",
        share: "Share",
    }
    return (
        <div className="flex navbar-start justify-start relative">
            <div> <IconButton icon={<LinkIcon fontSize={"small"}/>}  label={"About"} text={navbarText.about}/> </div>
            <div> <IconButton icon={<LinkIcon fontSize={"small"}/>}  label={"About"} text={navbarText.about}/> </div>
            <div> <IconButton icon={<ShareIcon fontSize={"small"}/>} label={"Share"} text={navbarText.share}/> </div>
        </div>
    );
}

export default AboutButtonGroup;