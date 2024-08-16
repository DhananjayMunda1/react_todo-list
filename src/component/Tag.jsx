import React from 'react'
import "./Tag.css"
  

const Tag = (props) => {
  const getClassName = () => {
    switch (props.tagname) {
      case 'HTML':
        return 'tag html-color';
      case 'CSS':
        return 'tag css-color';
      case 'JAVASCRIPT':
        return 'tag js-color';
        case 'REACTJS':
          return 'tag react-color';
      default:
        return 'tag default-color';
    }
  };  
  return (
    
    <button className={getClassName()}>
      {props.tagname}
    </button>
  )
}

export default Tag