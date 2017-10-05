import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

// Offline Plugin Configs
if (process.env.NODE_ENV === 'production') {
  const Runtime = require('offline-plugin/runtime');

  Runtime.install({
    onUpdateReady() {
      Runtime.applyUpdate();
    },
    onUpdated() {
      window.location.reload();
    },
  });
}
// Component Rendering
ReactDOM.render(
  <App />,
  document.querySelector('[data-js="app"]'),
)
