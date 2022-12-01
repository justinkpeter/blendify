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
            <div className="grid grid-rows-4 grid-flow-col gap-4 h-screen">
                <div className="row-span-1 col-span-4 h-auto bg-yellow-200">
                    Navbar
                    {/*<Navbar sendData={sendData} data={data}/>*/}
                </div>
                <div className="row-span-2 col-span-1 bg-purple-500 ">01</div>
                <div className="col-span-4 bg-teal-800">02</div>
                <div className="row-span-2 col-span-3 bg-rose-200">03</div>
            </div>
        </div>
    )
}