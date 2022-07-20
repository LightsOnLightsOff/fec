import React, {useState, useEffect} from 'react';

function StyleName ({style, clickedName, setOriginalPrice, setSalePrice, setStyleName, setDefaultSKU}) {

  const [name, setName] = useState('');

  useEffect (() => {
    if (clickedName.length === 0) {
      for (let i = 0; i < style.length; i++) {
        for (var keys in style[i]) {
          if (style[i]['default?']) {
            setName(style[i].name)
            setStyleName(style[i].name)
            setOriginalPrice(style[i].original_price)
            setSalePrice(style[i].sale_price)
            setDefaultSKU(style[i])
          }
        }
      }
    } else {
      setName(clickedName)
      setStyleName(clickedName)
    }
  })

  return (
    <div>
      <span className = 'style-label'>Style > </span>
      <span className = 'style-name'>{name}</span>
    </div>
  )
}

export default StyleName;