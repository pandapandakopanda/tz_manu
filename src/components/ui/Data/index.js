import React from 'react'
import ST from './index.scss'

import {inject, observer} from 'mobx-react'

import Button from '../Button'

@inject('store')
@observer
class Data extends React.Component {

  onChange = (ev) => {
    const date = ev.target.value
    this.props.onChange(date)
  }

  render(){
    const {title, date, min} = this.props

    return(
      <div className={ST.date}>
        <div className={ST.data_title}>{title}</div>
        <div className={ST.date_header}>
          {date}
          <Button mody={{'data_picker':true}} onClickHandler = {this.onClickHandler}/>
        </div>
        <input 
          className={ST.data_input} 
          onChange={this.onChange} 
          type='date'
          onKeyDown={(e) => e.preventDefault()}
        />
      </div>
    )
  }
}

export default Data