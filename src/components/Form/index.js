import React from 'react'
import {inject, observer} from 'mobx-react'

import ST from './index.scss'
import Select from '../ui/Select'
import Button from '../ui/Button'



@inject('store')
@observer
class Form extends React.Component {
  
  
  render(){
    const step = '1'
    
    const {countries, types, trys, timespent} = this.props.store
    const {countryId, visaId, countId, timeId} = this.props.store

    return(
      <div className={ST.form}>
        <h2 className={ST.form_step}>Шаг {step}.</h2>
        <div className={ST.form_select}>
          <Select 
            title={'Выберите страну'}
            selected={countryId}
            items={countries} 
            placeholder={'Выберите страну'}
            onSelect = {this.props.store.setCountryId}
          />
           <Select 
            title={'Тип визы'}
            selected={visaId}
            items={types} 
            placeholder={'Выберите тип визы'}
            onSelect = {this.props.store.setVisaId}
          />
          <Select 
            title={'Количество заездов'}
            selected={countId}
            items={trys} 
            placeholder={'Выберите количество заездов'}
            onSelect = {this.props.store.setCountId}
          />
          <Select 
            title={'Время обработки'}
            selected={timeId}
            items={timespent} 
            placeholder={'Выберите время обработки'}
            onSelect = {this.props.store.setTimeId}  
          /> 
          <div className={ST.form_data}>
          </div>
        </div>
      </div>
    )
  }
}

export default Form