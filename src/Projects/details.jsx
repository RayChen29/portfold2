import './projects.css';

function Details(){

    return(
        <div className="details-container">
            <div className="details-card details-description">
                <h2 className="desc-header">Description</h2>
                <p className='desc-desc'>
                    This project's creation stems from the observation of online imageboards
                    like Pixiv, Zerochan, and Instagram utilizing tags/hashtags to easily filter and find images like a search engine would.
                </p>
                <p>
                     Through all the times that I wanted to show off the one cute or funny picture to people, there were many times 
                    I just couldn't find it before resorting to Google Images, which may take even longer, 
                    whether because the keywords I used before would bring up more, newer results which drown out that one picture.
                </p>
                <p>
                       I imagine the problem gets bigger for those keeping much more memorabilia, partial solutions, and subsequent annoyances:
                
                <ul>
                    <li>Just keep scrolling, but sometimes you took alot of pictures that day so you might skip it by mistake, you don't remember what day it was or name it had</li>
                    <li>Make a system of folders: Hope your system isn't too complicated, or else they'll still be lost at sea</li>
                    <li>Keep it in a USB or CD: Now you have a physical worry: dont lose it and categorize them, or else you just recreate the above problems.</li>
                </ul>
                </p>
                <p>
                   PersonalBoard aims to mitigate these issues by the following:
                   <ul>
                        <li>You can just use one folder(or have subfolders if you'd like) and PB can just dig up every last folder and their images. More pictures on demand, less clicking.</li>
                        <li>Tag your images to make future searching easier and quicker. Show off those cat pictures and not those without cats.</li>
                   </ul>
                </p>
                {/* , in the present or future, the same isn't 
                usually true for those who store their images locally, or even on their private cloud storage,
                where those with large collections of memories are forced to either scroll their device for long times,
                or organize their images into folders, which may get unwieldy to handle.
                <br/> */}

            </div>
            <div className="details-card details-stack">
                <h2 className='stack-header'>Tech Stack</h2>
                <p className='stack-desc'>
                    <ul>
                        <li>Python</li>
                        <li>Tkinter for GUI (AKA the buttons and stuff)</li>
                        <li>Pillow Library for making image tagging possible</li>
                        <li>Base64 for encoding/decoding, especially for foreign languages</li>
                    </ul></p>
            </div>

        </div>

        
    );

}


export default Details;