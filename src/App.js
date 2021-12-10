import './App.css';
//import Registration from './Pages/signup/Registration';
//import Login from './Pages/Login/Login';
//import Forget from './Pages/Forget/Forget';
//import Reset from './Pages/Reset/Reset';
import Dashboard from './Pages/Dashboard/Dashboard';
//import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
  //   //<BrowserRouter>
  //   //<Routes>
    <div className="App">
    {/* <Route path = '/' component={Registration} />
    <Route path = '/Login' component={Login} />
    <Route path = '/Forget' component={Forget} />
    <Route path = '/Reset' component={Reset} /> */}
         <Dashboard /> 
    </div>
    //</Routes>
   // </BrowserRouter>
  );
}

export default App;
   
    
