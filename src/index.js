import * as React from 'react'
import ReactDOM from 'react-dom'
import ST from './index.scss'
import App from './components/App'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'

const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

ReactDOM.render(
      <Router>
        <Provider >
          <App />
        </Provider>
      </Router>, 
  container
)