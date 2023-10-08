import '../styles/App.css';
import REPL from './REPL';

/**
 * This is the highest level component!
 */
function App() {
  return (
    <div className="App">
      <p className="App-header">
        <h1>Fanny and AJ's Bizarre Mock Adventure</h1>
      </p>
      <REPL />      
    </div>
  );
}

export default App;