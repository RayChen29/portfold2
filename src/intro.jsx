import mePicture from './assets/MePicture.png'

function Intro(){
    return(
        <div className="section-intro">
            <div className="intro_component">
              <img className="me-pic" src={mePicture} alt="Raymond Chen"></img>
              <p className='me-blurb'><b className='my-name'>Hi, I'm Ray </b> <br></br>A 2023 Graduate from Portland State University with a Bachelor's Degree in Computer Science. Here is where I'll post any projects that I finish or am working on, as well as how to use them and any future plans I have towards their improvement.</p>
            </div>
        </div>
    )
}

export default Intro