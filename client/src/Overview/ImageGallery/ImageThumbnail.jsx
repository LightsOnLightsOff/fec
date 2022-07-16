import React, {useState, useEffect} from 'react';
import '../../../dist/style.css';

function ImageThumbnail ({show, children}) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(children.length)

  useEffect(() => {
    setLength(children.length)
  }, [children])

  const previousImage = (event) => {
    event.preventDefault();
    if (index > 0) {
      setIndex(prevState => prevState - 1)
    }
  }

  const nextImage = (event) => {
    event.preventDefault();
    if (index < (length - show)) {
      setIndex(prevState => prevState + 1)
    }
  }

  return (
    <div>
      <div>---------------Image Thumbnail--------------</div>
      <div className = 'carousel-container-thumbnail'>
        <div className = 'carousel-wrapper'>
          {(index > 0) && <button className = 'left-arrow' onClick = {previousImage}>&lt;</button>}
          <div className = 'carousel-content-wrapper'>
            {(index < (length - show)) && <button className="right-arrow" onClick = {nextImage}>&gt;</button>}
            <div className={`carousel-content show-${show}`} style={{ transform: `translateX(-${index * (100 / show)}%)`}}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageThumbnail;