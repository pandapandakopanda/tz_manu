import React from 'react'
import ST from './index.scss'

import Form from './Form'
import Header from './Header'


class App extends React.Component {

  render(){
    return(
      <div className={ST.wrapper}>
        <Header />
        <Form />
      </div>
    )
  }
}

export default App