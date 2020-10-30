import React from 'react'
import ST from './index.scss'


class Header extends React.Component {
  render(){
    return(
      <div className={ST.header}>
        <h2 className={ST.header_h2}>Приветики. Это мое тз</h2>
      </div>
    )
  }
}

export default Header