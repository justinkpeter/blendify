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


    return (
        <div>
            <div className="grid grid-rows-6 grid-cols-8 grid-flow-rows gap-4 h-screen">
                <div className="row-span-1 col-span-full h-auto bg-yellow-200">
                    Navbar
                    {/*<Navbar sendData={sendData} data={data}/>*/}
                </div>
                <div className="row-span-4 col-span-1 bg-purple-500 ">sidebar</div>
                <div className="row-span-4 col-span-5 bg-rose-200">content</div>
                <div className="row-span-4 col-span-2 bg-rose-500">recently played</div>
                <div className="row-span-1 col-span-full bg-rose-800"> hello </div>

            </div>
        </div>
    )
}