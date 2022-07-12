import React, {useState, useEffect} from 'react';

function StyleName ({style, clickedName, setOriginalPrice, setSalePrice, setStyleName}) {
  console.log ({style}, '<---------- In Style Name ------------->')
  console.log(clickedName, 'clickedName!!!! in StylName')

  const [name, setName] = useState('');

  useEffect (() => {
    if (clickedName.length === 0) {
      for (let i = 0; i < style.length; i++) {
        for (var keys in style[i]) {
          if (style[i]['default?']) {
            console.log(style[i], 'default product in StyleName')
            setName(style[i].name)
            setStyleName(style[i].name)
            setOriginalPrice(style[i].original_price)
            setSalePrice(style[i].sale_price)
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
      <div>Style ></div>
      <div>{name}</div>
    </div>
  )
}

export default StyleName;