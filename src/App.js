import './css/App.css';
import './css/Cadastrar.css'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import  Routes  from './Router';

function App() {
  return (
    <HashRouter className="App">
      <Routes></Routes>
    </HashRouter>
  );
}

export default App;
