import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function MoreVertIconButton() {
    function logout(){
        // console.log('yerrr')
        window.localStorage.removeItem("token")
    }

    return(
        <div className={"dropdown"}>
            <div tabIndex={0} className={"btn btn-ghost btn-circle btn-sm"}>
                <MoreVertIcon color={"white"}/>
            </div>

            {/* Dropdown menu */}
            <ul tabIndex={0} className="mt-4 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li onClick={logout}><a >Logout</a></li>
            </ul>
        </div>
    )
}