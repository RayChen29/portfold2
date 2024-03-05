// Skill component
import React from 'react';
import DEFAULT from './../assets/def-project-image.png';
import styles from './skill.module.css'

function Skill(props) {
    return (
        <div className='skill-image-container'>
            <img className={styles.skillImg} 
                src={props.image} alt={props.theSkill}
                width={props.size}
                height='auto'
             />
        </div>
    );
}

Skill.defaultProps = {
    image: DEFAULT,
    theSkill: "Default Skill",
    size: '100%',
}

export default Skill;
