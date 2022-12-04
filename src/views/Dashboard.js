import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Player from './Player'
// import '../views/Dashboard.css'

import {useState} from 'react'

export default function Dashboard(props){
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
        <div>
            <Navbar />
            
            <Sidebar />
            <Player/>
        </div>
    )
}