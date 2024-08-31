import CoreComponent from "../CoreComponent/CoreComponent.jsx"
import { CORE_CONCEPTS } from "../../data.js"
import Section from "../Section/Section.jsx"


        {/* <CoreComponents {...CORE_CONCEPTS[0]}/>
        <CoreComponents {...CORE_CONCEPTS[1]}/>
        <CoreComponents {...CORE_CONCEPTS[2]}/>
        <CoreComponents {...CORE_CONCEPTS[3]}/> */}

export default function CoreComponents(){
    return(
        <Section title="Core concepts" id="core-concepts">
        <ul>
            {CORE_CONCEPTS.map((i,j)=><CoreComponent key={j} {...i}/>)}
        </ul>
        </Section>

    )
}