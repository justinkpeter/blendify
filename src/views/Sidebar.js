import {useDataLayerValue} from "../utils/DataLayer";

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const SidebarOption = ({option, Icon}) => {
    return (
        <div className={"sidebarOption"}>
            {/*{ Icon && <Icon className="sidebarOption__icon" />}*/}
            {/*{ Icon ? (<h4> {option} </h4>): <p> {option} </p> }*/}
            <li><a className="hover:font-bold"> {option} </a></li>
        </div>
    );
}
export default function Sidebar(props){
    const [{ playlists }, dispatch] = useDataLayerValue()

    return(
            <div className="
                drawer-side
                h-screen
                w-1/6
                ml-4
                bg-zinc-500/5
                shadow-lg
                text-base
                rounded-2xl
                backdrop-blur-sm"
            >
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="md:text-base menu p-2 w-full text-xs overflow-auto">
                    {/*!--Sidebar content here --*/}

                    <li><a className="hover:font-bold"> <HomeIcon/> Home </a></li>
                    <li><a className="hover:font-bold"> <ExploreIcon/> Discover </a></li>
                    <li><a className="hover:font-bold"> <TrendingUpIcon/> Insights </a></li>
                    <li><a className="hover:font-bold"> <LibraryBooksIcon/> Your Library </a></li>

                    {playlists?.items?.map(playlist => (
                        <SidebarOption option={playlist.name}/>
                    ))}
                </ul>
            </div>
    )
}


