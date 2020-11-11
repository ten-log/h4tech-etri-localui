import './App.css';
import { Route } from 'react-router-dom';
import UwbPage from './Page/UwbPage';

const App =()=> {
  return (
    <div className="App">
      <Route component={UwbPage} path="/"  exact />
    </div>
  );
}
export default App;
