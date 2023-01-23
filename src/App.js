import { BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Router from './components/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
