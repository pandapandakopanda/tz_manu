import React from 'react'
import ST from './index.scss'

import {calcClass} from '../../../core/help'

class Select extends React.Component {
  
  
/*   ItemType = { id: String, name: string}

  // это в пропсы
  selected: String
  items: ItemType
  title:string
  onSelect: (id:string) => void */

  state={
    isListOpen:false
  }




  render(){


    const {title, selected, items} = this.props

    const list = items.map(i=><li className={ST.select_item} key={i.id}>{i.name}</li>)
    const headerClass = calcClass('select_header', ST,{'--open': this.state.isListOpen})

    return(
      <div className={ST.select}>
        <p className={ST.select_title}>{title}</p>
        <div className={headerClass}>{null}</div>
          <ul className={ST.select_list}>
            {(this.state.isListOpen)?list:null}
          </ul>
      </div>
    )
  }
}

export default Select