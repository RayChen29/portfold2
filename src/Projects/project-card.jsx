import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Default from '../assets/def-project-image.png';

// const router = createBrowserRouter([]);

function Project(props){
    return(
        // <Link to={props.link} className='project-link'>
             <a href={props.link} className='project-link'>
                <div className="project-card">
                    <img className='proj-img' src={props.image} alt={props.title}></img>
                    <p className="project-title">{props.title}</p>
                    <p className="project-description">{props.description}</p>
                </div>
            </a>
        //</Link>

    );
}
Project.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}
Project.defaultProps = 
{
    link: './',
    title: "SAMPLE TITLE",
    description: "IPSUM LOREM DOLORES SAM",
    image: Default,
}

export default Project