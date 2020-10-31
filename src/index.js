import * as React from 'react'
import ReactDOM from 'react-dom'
import ST from './index.scss'
import App from './components/App'
import { Provider } from 'mobx-react'
import store from './core/store'

const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

ReactDOM.render(
        <Provider store={store} >
          <App />
        </Provider>, 
  container
)