import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GithubProfileFinder from './components/github-profile-finder/index.jsx'
import Accordian from './components/accordian/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Accordian />
    {/* Github Profile Finder */}
    {/* <GithubProfileFinder /> */}
  </React.StrictMode>,
)
