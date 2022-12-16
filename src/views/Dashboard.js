import React, { useEffect, useState } from 'react'
import Navbar from '../views/Navbar'
import './Dashboard.css'
import { useDataLayerValue } from "../utils/DataLayer";



export default function Dashboard(){
    const [ {token}, dispatch ] = useDataLayerValue();

    function getSectionPercentage(){
        return ((window.scrollX / (document.body.scrollWidth - window.innerWidth)) * 100)
    }
    const Section = (props) => {
        return(
            <div>
                <div className={"flex grid grid-cols-26 grid-rows-10 h-screen w-section"} id={props.name}>
                    <div className={`col-span-full row-span-full ${props.color}`}> {props.name}</div>
                </div>
            </div>
        )
    }

    const [sections, setSections] = useState([
            {name: "Favorite Artists", color: "bg-green-500"},
            {name: "Favorite Tracks", color: "bg-blue-500"},
            {name: "Personality Profile", color: "bg-yellow-500"},
            {name: "Audio Analysis", color: "bg-red-500"}
        ])

    const [currentCard, setCurrentCard] = useState(sections[0].name);

    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            const currentSection = sections[Math.floor(getSectionPercentage() / 25)].name
            setCurrentCard(currentSection)
        });
        document.removeEventListener("scroll", (e) => {});
    }, [currentCard, sections]);

    // useEffect(() => {console.log("the current card is: ", currentCard)}, [currentCard])

    return(
            <div>
                <Navbar sections={sections} currentSection={currentCard}/>
                <div className={"flex overflow-x-scroll w-fit"}>
                    {sections.map((section) => {
                        return(
                            <Section key={section.name} name={section.name} color={section.color} id={section.name}/>
                        )
                    })}
                </div>
            </div>

    )
}