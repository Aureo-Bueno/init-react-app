import './App.css';
import Hello from './components/Hello';
import Description from './components/Description';
import Name from './components/Name';
import Event from './components/Events';
import Form from './components/Form';
import Conditional from './components/Conditional';

function App() {
  const myName = 'Aureo Bueno';

  return (
    <div className="App">
      <h1>Alterando o Jsx</h1>
      <p>Ola, {myName}</p>
      <Form />
      <Hello />
      <Description />
      <Name name={myName} />
      <Event number={9} />
      <h3>Renderizacao Condicional</h3>
      <Conditional />
    </div>
  );
}

export default App;
