import React from 'react';
import Project from '../project-card';
import PB from '../../assets/hashtag.png';
import '../projects.css';
import Details from '../details';
function PersonalBoard() {
  return(
    <div className='pb-container'>
      <Project className='pb-card'
          image={PB}
          title="Personal Board"
          link="https://github.com/RayChen29/PersonalBoard"
          description="A self-made Python project inspired by imageboards like Pixiv and ZeroChan, 
            where the user can 'tag' pictures from their computer with keywords, 
            and later use those keywords to pull up those exact photos."
      />
      <Details/>
    
    </div>



  );
}

export default PersonalBoard
