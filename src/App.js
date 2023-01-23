import './App.css';
import Hello from './components/Hello';
import Description from './components/Description';

function App() {
  const name = 'Aureo Bueno'
  return (
    <div className="App">
      <h1>Alterando o Jsx</h1>
      <p>Ola, {name}</p>
      <Hello />
      <Description />
    </div>
  );
}

export default App;
