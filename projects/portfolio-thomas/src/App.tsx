import './App.css';
import Rendering, { RenderingType } from './components/Rendering';

const DATA: RenderingType[] = [
  {
    path: require('./assets/Vergrootglas.fbx'),
    scale: 0.4,
    position: [-Math.PI * 2, -Math.PI / 2, Math.PI * 1.5],
  },
  { path: require('./assets/Diamond.fbx'), scale: 1.1, position: [0, -Math.PI / 2, 0] },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rendering item={DATA[0]} />
        <Rendering item={DATA[1]} />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
