import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../dist/css/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { } from '@fortawesome/free-regular-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faCartShopping)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
