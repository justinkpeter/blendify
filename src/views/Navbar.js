import SearchIcon from '@mui/icons-material/Search';
import SearchInput from "../components/SearchInput";
import ProfileActions from "../components/ProfileActions";

export default function Navbar(props){

    return(
        <div className={"relative"}>
            <div className="navbar pt-6 pr-6 pb-2 fixed top-3">
                <div className="w-24">
                    <a className="btn btn-ghost normal-case text-xl">blendify</a>
                </div>
                <SearchInput/>
                <div className="w-full justify-end">
                    <ProfileActions />
                </div>
            </div>
        </div>

    )


}