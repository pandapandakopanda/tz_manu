import React from 'react'
import ST from './index.scss'
import { inject, observer} from 'mobx-react'

import FormOne from './Form/stepOne'
import FormTwo from './Form/stepTwo'
import Header from './Header'
import Footer from './Footer'

@inject('store')
@observer
class App extends React.Component {

  render(){
    return(
      <div className={ST.wrapper}>
        <Header />
        {(this.props.store.step) ? <FormOne /> : <FormTwo />}
        <Footer />
      </div>
    )
  }
}

export default App