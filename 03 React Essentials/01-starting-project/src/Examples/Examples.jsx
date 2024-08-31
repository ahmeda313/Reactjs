import { useState } from "react"
import TabButton from "../TabButton/TabButton.jsx"
import { EXAMPLES } from "../../data.js"
import Section from "../Section/Section.jsx"
import Tab from "../Tab/Tab.jsx"



export default function Examples(){

    const [tabContent, setTabContent] = useState()

    function handleClick(topic){
      setTabContent(topic)
      console.log(tabContent)
    }

    return(
        <>
        <Section title="Examples" id="examples">
        <Tab  buttons={ 
        <>
          <TabButton onClick={()=>{handleClick('components')}} isSelected={tabContent==='components'} >Component</TabButton>
          <TabButton onClick={()=>{handleClick('jsx')}} isSelected={tabContent==='jsx'} >JSX</TabButton>
          <TabButton onClick={()=>{handleClick('props')}} isSelected={tabContent==='props'} >props</TabButton>
          <TabButton onClick={()=>{handleClick('state')}} isSelected={tabContent==='state'} >State</TabButton>
        </>}> 

                {tabContent?
                <div id="tab-content">
                  <h3>{EXAMPLES[tabContent].title}</h3>
                  <p>{EXAMPLES[tabContent].description}</p>
                  <pre>
                    <code>
                    {EXAMPLES[tabContent].code}
                    </code>
                  </pre>
                </div>:<p id="tab-content">Please select any topic</p>}

        </Tab>
        </Section>
        </>
    )
}