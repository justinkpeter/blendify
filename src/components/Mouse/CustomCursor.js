import React, {useRef, useEffect } from 'react';
import "../../styles/CustomCursor.css";

export const CustomCursor = () => {

    const mainCursor = useRef(null);
    const secondaryCursor = useRef(null);

    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    });



    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e

            positionRef.current.mouseX = clientX - secondaryCursor.current.clientWidth / 2
            positionRef.current.mouseY = clientY - secondaryCursor.current.clientHeight/ 2

            const mouseX = clientX - mainCursor.current.clientWidth / 2;
            const mouseY = clientY - mainCursor.current.clientHeight / 2;
            mainCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        });
    }, [positionRef, mainCursor]);

    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);

            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
                distanceX,
                distanceY,
            } = positionRef.current;

            if(!destinationX || !destinationY){
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            }else{
                positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
                if(Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1){
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                }else{
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }
            secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        }
        followMouse();
    }, []);


    return(
        <>
            <div className="main-cursor" ref={mainCursor}/>
            <div className="secondary-cursor" ref={secondaryCursor}/>
        </>

    )
};

export default CustomCursor;