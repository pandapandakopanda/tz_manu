import React from 'react'

import ST from './index.scss'
import Select from '../ui/Select'
import Button from '../ui/Button'

import json from '../../core/data.json'
console.log('json: ', json);


const items = [ 
  {"id": "RU", "name": "Россия"},
  {"id": "DE", "name": "Германия"},
  {"id": "EE", "name": "Эстония"}
]



class Form extends React.Component {

 
  render(){
    const step = '1'
    return(
      <div className={ST.form}>
        <h2 className={ST.form_step}>Шаг {step}.</h2>
        <div className={ST.form_select}>
          <Select 
            title={'Выберите страну'}
            selected={items[0].id}
            items={items} 
          />
           <Select 
            title={'Тип визы'}
            selected={items[0].id}
            items={items} 
          />
          <Select 
            title={'Количество заездов'}
            selected={items[0].id}
            items={items} 
          />
          <Select 
            title={'Время обработки'}
            selected={items[0].id}
            items={items} 
          />
          <div className={ST.form_data}>
          </div>
        <Button type='button' title={'Продолжить'}/>
        </div>
      </div>
    )
  }
}

export default Form