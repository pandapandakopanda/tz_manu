import React from 'react'
import {inject, observer} from 'mobx-react'

import ST from './index.scss'
import Select from '../ui/Select'
import Data from '../ui/Data'
import Button from '../ui/Button'
import iconRight from '../../assets/keyboard_arrow_right.png'


@inject('store')
@observer
class FormOne extends React.Component {
  
  
  render(){

    const {
      countries, countryId, 
      types, visaId, 
      filtredTryes, countId, 
      filtredTimeSpent, timeId,
      totalCost,
      startDate, endDate,
      setStartDate, setEndDate,
      checkDataFirstSTep
    } = this.props.store


    return(
      <div className={ST.form}>
        <h2 className={ST.form_step}>Шаг 1.</h2>
        <div className={ST.form_select}>
          <div className={ST.form_field}>
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
          </div>
          <div className={ST.form_field}>
            <div className={ST.form_date}>
                <Data title='Въезд:' date={startDate} onChange={setStartDate}/>
                <Data title='Выезд:' date={endDate} onChange={setEndDate}/>
            </div>
            <Select 
              title={'Количество заездов'}
              selected={countId}
              items={filtredTryes} 
              placeholder={(countryId)?'Выберите количество заездов':'Пожалуйста, выберите страну'}
              onSelect = {this.props.store.setCountId}
            />
            <Select 
              title={'Время обработки'}
              selected={timeId}
              items={filtredTimeSpent} 
              placeholder={(countryId)?'Выберите время обработки':'Пожалуйста, выберите страну'}
              onSelect = {this.props.store.setTimeId}  
            /> 
          </div>
        </div>
        <div className={ST.form_bottomField}>
          <div className={ST.form_dataField}>
            <div className={ST.form_cost}>
            <p>Предварительная стоимость:</p>
            <p className={ST.form_totalcost}>{ `€${totalCost}` }</p>
            </div>
          </div>
          <div className={ST.form_buttonField}>
            <Button title={`Продолжить `} onClickHandler={checkDataFirstSTep}/>
          </div>
        </div>
      </div>
    )
  }
}

export default FormOne