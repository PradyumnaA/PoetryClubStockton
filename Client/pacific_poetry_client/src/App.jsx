import './App.css';
import NavbarComponent from './components/NavbarComponent';

import Landing from './pages/Landing';

function App() {
  return (
    <div className="app-container">
      <NavbarComponent />
      
      <Landing/>
    </div>
  );
}

export default App;
