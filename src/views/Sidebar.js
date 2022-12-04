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
                flex
                w-1/6
                ml-4
                bg-white/5
                text-base
                rounded-2xl
                backdrop-blur-sm"
            >
                <ul className="menu p-2 w-full h-1/2">
                    {/*!--Sidebar content here --*/}
                    <SidebarOption option={"Home"} Icon={HomeIcon}/>
                    <SidebarOption option={"Explore"} Icon={ExploreIcon}/>
                    <SidebarOption option={"Insights"} Icon={TrendingUpIcon}/>
                    <SidebarOption option={"Your Library"} Icon={LibraryBooksIcon}/>
                    <div className="divider"></div>

                    {/* playlists coming in from spotify*/}
                    <div className={"h-1/2 overflow-scroll"}>
                        {playlists?.items?.map(playlist => (
                            <SidebarOption option={playlist.name}/>
                        ))}
                    </div>

                </ul>
            </div>
    )
}


