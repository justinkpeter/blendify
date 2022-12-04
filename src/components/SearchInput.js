import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchInput(props) {

    const [focusState, setFocusState] = useState(false);

    const handleFocus = () => { console.log('fo cuseddd')}


    return(
        <div className={" bg-gray-300/10 h-10 rounded-full w-1/3 ml-36 hover:bg-gray-400/10"}>
            <div className={"ml-4"}>
                <SearchIcon />
            </div>
            <input
                type="search"
                name="serch"
                placeholder="Search.."
                className={"bg-transparent h-10 px-5 w-full text-sm focus:outline-none"}
            />

        </div>
    )
}