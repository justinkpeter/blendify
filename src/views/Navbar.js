import {Fragment, useEffect} from "react";

export default function Navbar({props}){
    useEffect(() => {
        // document.getElementById("my-drawer").checked = true;
        console.log(props)
    })

    return(

        <div className="navbar bg-base-200 gap-2 rounded-full">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Blendify</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>
    )


}