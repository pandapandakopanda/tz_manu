import React from 'react'
import ST from './index.scss'
import Select from '../ui/Select'


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
        </div>
      </div>
    )
  }
}

export default Form