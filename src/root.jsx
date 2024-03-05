import './index.css';
import Intro from './intro';
import Projects from './Projects/projects';
import Skills from './Skill/skills';


function Root(){
    return(
        <div>
            <Intro/>
            <Projects/>
            <Skills/>
        </div>
    );
}

export default Root;