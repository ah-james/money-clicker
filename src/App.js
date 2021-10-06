import './App.css';
import HomeContainer from './containers/HomeContainer';

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <HomeContainer />
      </header>
    </div>
  );
}

export default App;
