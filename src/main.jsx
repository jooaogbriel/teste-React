import React from 'react'
import ReactDOM from 'react-dom/client'
import AutocorrectApp from './components/AutocorrectApp.jsx'
import App from './App.jsx'
import './index.css'

const corrections = {
  realy: 'really',
  wierd: 'weird',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AutocorrectApp corrections={corrections} />
  </React.StrictMode>,
)
