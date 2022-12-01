import {Fragment, useEffect, useState} from "react";

export default function Navbar(props){
    const logout = () => {
        window.localStorage.removeItem("token")

    }

    useEffect(() => {
        // document.getElementById("my-drawer").checked = true;
        // console.log(props)
    })

    const [profileToken, setProfileToken] = useState(props);
    console.log("props in nav bar", props)

    const handleOpenSidebar = () => {
        console.log('ummmmm')
    }

    useEffect(() => {
        setProfileToken(props);
    }, [props]);

    return(
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label onClick={handleOpenSidebar} tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">blendify</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                </ul>
            </div>
            <div className="navbar-end pr-8">
                {/* PROFILE STUFF */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                         <div className="w-24 rounded-full">
                             <img src="https://placeimg.com/80/80/people" />
                         </div>
                     </label>
                     <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                         <li>
                             <a className="justify-between">
                                 Profile
                                 <span className="badge">New</span>
                            </a>
                        </li>
                         <li><a>Settings</a></li>
                         <li><a onClick={() => console.log("yerrrr,", props)}>Logout</a></li>
                     </ul>
                 </div>
            </div>
        </div>
    )


}