import Project from './Project'
import {data_en, data_fr} from '../../projects'
import {BiSolidDownArrow} from 'react-icons/bi'

export default function Projects(props) {
    return(
        <div id='projects' className="xl:mx-40 md:mx-24 md:pt-20 mx-6 space-y-10">
            <div className="flex items-center text-[#0082E0] space-x-2">
                <h3 className="font-ubuntu font-bold uppercase text-2xl">{props.lng.projects.projects}</h3>
                <div><BiSolidDownArrow size={28} /></div>
            </div>
            <div>
                {props.lng.lang == "en" ?
                data_en.map((e, index) => <Project key={index} inf={{
                    id: e.id,
                    webDesktop: e.webDesktop,
                    tools: e.tools,
                    about: e.about,
                    webMobile: e.webMobile,
                    name: e.name,
                    lang: "en" }} />)
                :
                data_fr.map((e, index) => <Project key={index} inf={{
                    id: e.id,
                    webDesktop: e.webDesktop,
                    tools: e.tools,
                    about: e.about,
                    webMobile: e.webMobile,
                    name: e.name,
                    lang: "fr" }} />)}
            </div>
        </div>
    )
}