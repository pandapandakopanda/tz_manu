import React from 'react'
import ST from './index.scss'


class Form extends React.Component {
  render(){
    const step = '1'
    return(
      <div className={ST.form}>
        <h2 className={ST.form_step}>Шаг {step}</h2>
      </div>
    )
  }
}

export default Form