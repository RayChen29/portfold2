// Skills component
import React from 'react';
import Skill from './skill';
import './skills.css';
import CPPImage from './../assets/cpp.png'
// import CImage from './../assets/c.png'
import PythonImage from './../assets/python.png'
import ReactImage from './../assets/React.png';
import GitHubImg from './../assets/github.svg'

// TODO: enlarge C and C++ images.
function Skills() {
    return (
        <div className="skills-section">
            <h1 className='myskill-header'>My Skills</h1>
            <div className="skills-container">
                <Skill image={CPPImage} 
                    theSkill='C++'/> 
                <Skill image={PythonImage} 
                        theSkill='Python'/>
                <Skill image={ReactImage}
                        theSkill='React'/>
                <Skill image={GitHubImg}
                        theSkill='GitHub'
                        />
                
            </div>
        </div>
    );
}

export default Skills;
