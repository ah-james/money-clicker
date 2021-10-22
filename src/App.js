import './App.css';
import HomeContainer from './containers/HomeContainer';
import TellerContainer from './containers/TellerContainer'

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <HomeContainer />
        <TellerContainer />
      </header>
    </div>
  );
}

export default App;
