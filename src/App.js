import logo from './logo.svg';
import './App.css';
import Zendesk from "react-zendesk";
const ZENDESK_KEY = process.env.REACT_APP_ZENDESK_KEY;
const setting = {}

function App() {
  return (
    <div className="App">
      <Zendesk defer zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
