import './App.css';
import { Route } from 'react-router-dom';
import UwbPage from './Page/UwbPage';
import HeaderPage from './Page/HeaderPage';

const App =()=> {
  return (
    <div className="App">
      <Route component={HeaderPage} path="/"  />
      <Route component={UwbPage} path="/"  exact />
    </div>
  );
}
export default App;
