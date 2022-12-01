import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

export default function Sidebar(props){
    // const [profileToken, setProfileToken] = useState(props);
    // console.log("props in sidebars", props)

    // useEffect(() => {
    //     setProfileToken(props);
    // }, [props]);

    const setToggleDrawer = () => {
        console.log("clicked toggler Drawer")
    }

    return(
            <div className="drawer-side h-2/3 bg-slate-400/10 text-base-content rounded-2xl mx-6">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-2">
                    {/*!--Sidebar content here --*/}
                    <li><a className="hover:font-bold"> <HomeIcon/> Home </a></li>
                    <li><a className="hover:font-bold"> <ExploreIcon/> Discover </a></li>
                    <li><a className="hover:font-bold"> <TrendingUpIcon/> Insights </a></li>
                    <li><a className="hover:font-bold"> <LibraryBooksIcon/> Your Library </a></li>

                </ul>
            </div>


        // <div className="drawer drawer-mobile ">
        //     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        //     <div className="drawer-content flex flex-col items-center justify-center">
        //         {/*!--Page content here --*/}
        //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        //
        //     </div>
        //     <div className="drawer-side ">
        //         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        //         <ul className="menu w-auto h-90 bg-slate-400/10 text-base-content rounded-2xl mx-6">
        //             {/*!--Sidebar content here --*/}
        //             <li><a className="hover:font-bold"> <HomeIcon/> Home </a></li>
        //             <li><a className="hover:font-bold"> <ExploreIcon/> Discover </a></li>
        //             <li><a className="hover:font-bold"> <TrendingUpIcon/> Insights </a></li>
        //             <li><a className="hover:font-bold"> <LibraryBooksIcon/> Your Library </a></li>
        //
        //
        //             <li><a className="text-sm font-light hover:font-bold"> playlist1 </a></li>
        //             <li><a className="text-sm font-light hover:font-bold"> playlist2 </a></li>
        //             <li><a className="text-sm font-light hover:font-bold"> playlist3 </a></li>
        //             <li><a className="text-sm font-light hover:font-bold"> playlist4 </a></li>
        //
        //         </ul>
        //
        //     </div>
        // </div>
    )

}


