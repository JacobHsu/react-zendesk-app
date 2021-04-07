import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import Zendesk, { ZendeskAPI } from "react-zendesk";
const ZENDESK_KEY = process.env.REACT_APP_ZENDESK_KEY;
const setting = {}

function App() {

  useEffect(() => {
      ZendeskAPI('webWidget', 'hide') // not working
  })

  return (
    <div className="App">
      <Zendesk defer zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="javascript:$zopim.livechat.window.hide()">hide</a>
        <a href="javascript:$zopim.livechat.window.show()">show</a>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
