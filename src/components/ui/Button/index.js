import React from 'react'
import ST from './index.scss'
import {calcClass} from '../../../core/help'



class Button extends React.Component {
  render(){

    const {type, title}=this.props
    console.log('type: ', type,{});

    const buttonClass = calcClass(type, ST)
    return(
      <div className={buttonClass}>
        {title}
      </div>
    )
  }
}

export default Button