import React, {useEffect, useState} from 'react';
import '../../styles/ProgressBar.css';

function ProgressBar(props) {

    const [scroll, setScroll] = useState(0);
    const [scrollerStyle, setScrollerStyle] = useState(`translate3d(0px, 0%, 0px)`);

    function getScrollPercentage(){
        return (window.scrollX / (document.body.scrollWidth - window.innerWidth)) * 100;
    }

    function getScrollerStyle(){
        let scrollerClass = "";
        switch(props.label) {
            case "Favorite Artists":
                scrollerClass = "translate3d(0px, 0%, 0px)"
                break

            case "Favorite Tracks":
                scrollerClass = "translate3d(0px, -25%, 0px)"
                break

            case "Personality Profile":
                scrollerClass = "translate3d(0px, -50%, 0px)"
                break

            case "Audio Analysis":
                scrollerClass = "translate3d(0px, -75%, 0px)"
                break

            default:
                scrollerClass = "translate3d(0px, 0%, 0px)"
                break
        }
        setScrollerStyle(scrollerClass)
    }

    // function to create animation keyframes on progress bar when scrolling
    const updateProgress = () =>{
        setScroll(getScrollPercentage());
        requestAnimationFrame(updateProgress);
    }

    // handles scroll events
    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            updateProgress()
        });
        document.removeEventListener("scroll", (e) => {});
    }, []);

    // handles label changes
    useEffect(() => {
        setTimeout(() => { getScrollerStyle()}, 200);
    }, [props.label]);


    return (
        <div className="navbar-center justify-start rounded-full h-10 w-64">
            <div className={"flex relative bg-green-500 rounded-full h-full w-full object-contain place-content-center z-0 overflow-hidden"}>
                <div
                    id={"progress-bar"}
                    style={{width: `${scroll}%`}}
                    className={"flex absolute left-0 w-full h-full bg-green-700 rounded-l-full rounded-r-full will-change-transform z-0"}
                >
                </div>
                <div className={"flex flex-col transition absolute z-10 gap-2 font-bold text-lg p-1.5 text-white"}
                     style={{transform: `${scrollerStyle}`}}>
                    {props.sections.map((section) => {
                        return(
                            <span key={section.name}> {section.name }</span>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;