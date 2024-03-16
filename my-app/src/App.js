import logo from './logo.svg';
import './App.css';

const App = (props) => {
  return(
    <div className="f1 tc">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>{props.greeting}</p>
    </div>
  )
}

export default App;

