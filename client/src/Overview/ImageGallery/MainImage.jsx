import React, {useState, useEffect} from 'react';

function MainImage ({children}) {
  //children - content to be displayed on Carousel
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(children.length)

  useEffect(() => {
    setLength(children.length)
  }, [children])

  const previousImage = (event) => {
    event.preventDefault();
    console.log ('previous image plz!')
    if (index > 0) {
      setIndex(prevState => prevState - 1)
    }
  }

  const nextImage = (event) => {
    event.preventDefault();
    console.log ('next image plz!')
    if (index < (length - 1)) {
      setIndex(prevState => prevState + 1)
    }
  }

  return (
    <div>
      <div>---------------Main Image--------------</div>
      <div className = 'carousel-container'>
        <div className = 'carousel-wrapper'>
          {(index > 0) && <button className = 'left-arrow' onClick = {previousImage}>&lt;</button>}
          <div className = 'carousel-content-wrapper'>
          {(index < (length - 1)) && <button className="right-arrow" onClick = {nextImage}>&gt;</button>}
            <div className = 'carousel-content' style={{ transform: `translateX(-${index * 100}%)` }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainImage;