import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Player from './Player'
import Content from './Content'

import {useDataLayerValue} from "../utils/DataLayer";

import {useState} from 'react'

export default function Dashboard(props){

    const [{ user }] = useDataLayerValue();
    
    const [data, setData] = useState(false);
    const sendData = (data) => {
        setData(!data);
    }
    //Sidebar  - navigation
    //Navbar
    //Content
    //Footer


    //Navbar
    // Grid
        //content

    return (
        <div className={"h-full flex bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-800 via-fuchsia-900 to-cyan-900 "}>
            <Navbar />
            <div className={"grid grid-cols-5 grid-flow-row gap-4 h-screen w-full mt-24 overflow-y-scroll ;"}>
                <Sidebar/>
                <Content/>
                <div className={"bg-green-300"}> Somthing on the side </div>
                {/*<div className={"bg-green-300/5"}>  3 </div>*/}
                {/*<div className={"bg-red-300/5"}>  4 </div>*/}
                {/*<div className={"bg-teal-300/5"}>  5 </div>*/}
            </div>
            {/*<Player/>*/}
        </div>
    )
}