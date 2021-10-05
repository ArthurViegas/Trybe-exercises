import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const array = ['valor 1', 'valor 2', 'valor 3']
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ol>{array.map(itens => Task(itens))}</ol>
        
      </header>
    </div>
  );
}

export default App;
