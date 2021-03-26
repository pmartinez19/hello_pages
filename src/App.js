import './App.css';
import {AppRouter} from './router/AppRouter';
import {Navbar} from './components/ui/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      {AppRouter}
    </div>
  );
}

export default App;
