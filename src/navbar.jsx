import React from 'react';

function Navbar() {
  // Event handlers
  const handleMouseOver = (event) => {
    // Handle mouseover event
  };

  const handleMouseOut = (event) => {
    // Handle mouseout event
  };

  const handleMouseDown = (event) => {
    // Handle mousedown event
  };

  function scrollToContact() {
    const element = document.querySelector('.submit-button');
    if (element) {
      element.scrollIntoView({
        behavior:'smooth'
      });
    }
  };

  return (


    <nav className="navbar">
      {/* About me */}
      <a href='/' className="topleft-me" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onMouseDown={handleMouseDown}>
        Raymond Chen
      </a>
      <button onClick={scrollToContact} className='topleft-me beyond-tlm' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onMouseDown={handleMouseDown}>
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
