
require('./style.css')

import React from 'react'
import ReactDom from 'react-dom'
import AppInterface from './components/App'

ReactDom.render(
  <AppInterface />,
  document.querySelector('#app')
)
