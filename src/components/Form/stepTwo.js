import React from 'react'
import {inject, observer} from 'mobx-react'

import ST from './index.scss'
import Select from '../ui/Select'
import Data from '../ui/Data'
import Button from '../ui/Button'
import Input from '../ui/Input'

import {calcClass} from '../../core/help'

@inject('store')
@observer
class FormTwo extends React.Component {
  
  
  render(){

    const {
      toggleForm,
      setFirstName,setSecondName,
      firstName, secondName,
      bDate, setBDate,
      user,
      sitizenshipId, citizenship, 
      totalCost,
      startDate,
      checkDataSecondStep
    } = this.props.store
    
    const countryName = this.props.store.getCountryName()
    const visaType = this.props.store.getVisaType()
    const spentTime = this.props.store.getSpentTime()

    return(
      <div className={ST.form}>
        <h2 className={ST.form_step}>Шаг 2.</h2>
        <div className={ST.form_select}>
          <div className={ST.form_user}>
            <p>{user}</p>
          </div>
          <div className={ST.form_field}>
            
            <Input 
              title='Имя' 
              onChangeHandler={setFirstName}
              placeholder={(firstName)?firstName:'Введите имя'}
            />
            <Input 
              title='Фамилия' 
              onChangeHandler={setSecondName}
              placeholder={(secondName)?secondName:'Введите фамилию'}
            />
            <div className = {ST.form_date}>
            <Data title='Дата рождения:' date={bDate} onChange={setBDate}/>
            </div>
            <Select 
              title={'Гражданство'}
              selected={sitizenshipId}
              items={citizenship} 
              placeholder={'Выберите гражданство'}
              onSelect = {this.props.store.setSitizenshipId}
            />
          </div>
        </div>
        <div className={ST.form_bottomField}>

          <div className={calcClass('form_dataField', ST, {'small':true})}>
            <p className={ST.form_visa}>Виза</p>

            <div className={ST.form_data}>

              <div className={ST.form_datablock}>
                <p>Страна: {countryName} </p>
                <p>Вид визы: {visaType}</p>
              </div>

              <div className={ST.form_datablock}>
                <p>Въезд: {startDate}</p>
                <p>Время обработки: {spentTime} </p>
              </div>
              
            </div>
            <div className={ST.form_cost}>
              <p>Предварительная стоимость:</p>
              <div className={ST.form_totalcost}>{ `€${totalCost}` }</div>
            </div>
          </div>

          <div className = {ST.form_buttonField}>
            <Button mody={{'back':true}} title={`Вернуться `} onClickHandler={toggleForm}/>
            <Button title={`Готово`} onClickHandler={checkDataSecondStep}/>
          </div>

        </div>
      </div>
    )
  }
}

export default FormTwo