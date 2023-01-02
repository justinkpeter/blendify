import {AudioToggle} from "./AudioToggle";
import {PlayIcon} from "@heroicons/react/24/solid";
import {useState} from "react";

import '../styles/AudioButton.css';

export const AudioButton = () => {

    const styles = {
        default: "w-10 h-10 pl-1 text-green-500 hover:scale-0 hover:text-green-500 transition duration-800 delay-200"
    }

    const Default = ({style}) => {
        return(
            <PlayIcon className={"absolute"}/>
        )
    }

    const Waveform = () => {
        return(<AudioToggle/>)
    }

    const [audioButtonStyle, setAudioButtonStyle] = useState(styles.default)
    const [hover, setHover ] = useState(false)

    return (
        <div className={"w-14 h-14 rounded-full flex justify-center items-center p-2 bg-slate-900 relative will-change-contents"}>
            <div className={"absolute on-hover"}>
                <PlayIcon className={"w-10 h-10 text-green-500"}/>
                {/*<AudioToggle/>*/}
            </div>
        </div>
    )
}