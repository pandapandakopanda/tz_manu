import React from 'react'
import ST from './index.scss'


class Select extends React.Component {
  
  
/*   ItemType = { id: String, name: string}

  // это в пропсы
  selected: String
  items: ItemType
  title:string
  onSelect: (id:string) => void */






  render(){

    const {title, selected, items} = this.props

    const list = items.map(i=><li className={ST.select_item} key={i.id}>{i.name}</li>)

    return(
      <div className={ST.select}>
        <p className={ST.select_title}>{title}</p>
        <div className={ST.select_header}>{null}</div>
          <ul className={ST.select_list}>
            {list}
          </ul>
      </div>
    )
  }
}

export default Select