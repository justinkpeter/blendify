import React, {useEffect, useRef} from 'react';
// import "../../styles/Mouse/MouseGlow.css";

function MouseGlow(props) {

    const mouseCursor = useRef(null);

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            // const { clientX, clientY } = e
            // const mouseX = clientX - mouseCursor.current.clientWidth / 2;
            // const mouseY = clientY - mouseCursor.current.clientHeight / 2;
            //
            // mouseCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;


        })

        document.removeEventListener("mousemove", (e) => {});
    }, [])

    return (
        <div ref={mouseCursor} className={""}/>
    );
}

export default MouseGlow;