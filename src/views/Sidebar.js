import {useDataLayerValue} from "../utils/DataLayer";

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const SidebarOption = ({option, Icon}) => {
    return (
        <li>
            <a className={"text-sm hover:text-white bg-transparent"}>
                { Icon && <Icon/> }
                { Icon ? (<h4 className={"font-bold"}> {option} </h4>): <p className={"font-light text-sm"}> {option} </p> }
            </a>
        </li>
    );
}
export default function Sidebar(props){

    const [{ playlists }, dispatch] = useDataLayerValue()
    return(
            <div className="
                drawer-side
                fixed
                flex
                ml-4
                bg-white/20 p-5 rounded-xl backdrop-blur-lg"
            >
                <ul className="menu flex p-1 h-full w-full ">
                    {/*!--Sidebar content here --*/}
                    <SidebarOption option={"Home"} Icon={HomeIcon}/>
                    <SidebarOption option={"Explore"} Icon={ExploreIcon}/>
                    <SidebarOption option={"Insights"} Icon={TrendingUpIcon}/>
                    <SidebarOption option={"Your Library"} Icon={LibraryBooksIcon}/>
                    <div className="divider"></div>
                    {/* playlists coming in from spotify*/}
                    <div className={"h-96 overflow-scroll"}>
                        {playlists?.items?.map(playlist => (
                            <SidebarOption option={playlist.name}/>
                        ))}
                    </div>
                </ul>
            </div>
    )
}


