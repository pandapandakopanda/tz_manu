import React from 'react'
import ST from './index.scss'

import {calcClass} from '../../../core/help'
import Button from '../Button'
import {findElementbyId} from '../../../core/help'

class Select extends React.Component {
/*   listRef = React.createRef()
  
  handleClick = (ev) =>{
    if( !this.state.isListOpen ) return  
    
    const { target } = ev
    const listElement = this.listRef.current
    if ( !listElement.contains(target) ) this.toggle() 
  }

  componentDidMount(){
    document.body.addEventListener('click', this.handleClick)
  }

  componentWillUnmount(){
    document.body.removeEventListener('click', this.handleClick)
  } */
  
  state={
    isListOpen: false
  }

  toggle = () => {
    this.setState({isListOpen:!this.state.isListOpen})
  }

  onClick = (ev) => {
    const id = ev.target.dataset.id
    this.props.onSelect(id)
    this.toggle() 
  }


  render(){
    const { title, selected, items, placeholder } = this.props
    const selectedItem = findElementbyId(selected, items)
    const name = selectedItem ? selectedItem.name : placeholder


    const list = items.map(i =>{ 
      return <li 
              className={ ST.select_item } 
              data-id={ i.id } 
              key={ i.id }
            >
              {i.name}
            </li>
    })

    const headerClass = calcClass('select_header', ST,{'open': this.state.isListOpen})

    return(
      <div className={ST.select}>
        <p className={ST.select_title}>{title}</p>

        <div className={headerClass} onClick={ this.toggle }>
          { name }
          <Button mody={{'arrow_down':true}}/>
        </div>
        
        <div className={ST.wrapper}>
          <ul className={ST.select_list} onClick={this.onClick} ref={this.listRef}>
            {(this.state.isListOpen)?list:null}
          </ul>
        </div>
      </div>
    )
  }
}

export default Select

