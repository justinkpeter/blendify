import React from 'react';
import AboutButtonGroup from "../components/Navbar/AboutButtonGroup";
import ProgressBar from "../components/Navbar/ProgressBar";
import ProfileActions from "../components/Navbar/ProfileActions";


export default function Navbar(props){

    return(
        <div className={"relative"}>
            <div className={"flex flex-col"}>
                <div className="navbar w-screen fixed" id={"navbar"}>
                    <AboutButtonGroup/>
                    <ProgressBar label={props.currentSection} sections={props.sections}/>
                    <ProfileActions/>
                </div>
                <div className={"fixed w-screen top-12 left-[40rem]"}>
                    {/*<ProgressBar/>*/}
                </div>
            </div>


        </div>

    )


}