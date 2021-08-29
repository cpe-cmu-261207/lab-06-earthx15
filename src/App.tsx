import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Curent from './components/Curent';
import History from './components/History';
import Historyresule from './components/Historyresule';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/current'>
          <Curent></Curent>
        </Route>
        <Route path='/history/select'>
        <History></History>
        </Route>
        <Route path='/history/result'>
          <Historyresule></Historyresule>
        </Route>
        <Route path='/about'>
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>About me</p>
            <p className='text-xl'>konthakarn fukam 630610719</p>
          </div>
        </Route>
        <Route path='/' exact>
          <Curent></Curent>
        </Route>

      </Switch>


    </Router>
  );
}

export default App;
