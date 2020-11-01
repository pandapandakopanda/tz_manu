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
    
    const {
      countries, 
      types, 
      countryId, 
      visaId, 
      countId, 
      timeId,
      filtredTryes,
      filtredTimeSpent,
      totalCost
    } = this.props.store
    console.log('totalCost: ', totalCost);

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
            items={filtredTryes} 
            placeholder={(countryId)?'Выберите количество заездов':'пожалуйста выберите страну'}
            onSelect = {this.props.store.setCountId}
          />
          <Select 
            title={'Время обработки'}
            selected={timeId}
            items={filtredTimeSpent} 
            placeholder={(countryId)?'Выберите время обработки':'пожалуйста выберите страну'}
            onSelect = {this.props.store.setTimeId}  
          /> 
          <div className={ST.form_data}>
          </div>
        </div>
        <div className={ST.form_cost}>
          <p>Предварительная стоимость:</p>
          <p className={ST.form_totalcost}>{ `€${totalCost}` }</p>
        </div>
      </div>
    )
  }
}

export default Form