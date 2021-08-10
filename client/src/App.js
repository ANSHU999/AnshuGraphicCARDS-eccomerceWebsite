import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter , Route , Link ,Switch} from  'react-router-dom'
import 'bootstrap'
import Navbar from './components/Navbar';
import Homescreens from './screens/Homescreens';
import CartScreens from './screens/CartScreens';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreens from './screens/Ordersscreens';
import Adminscreen from './screens/Adminscreen';


function App() { 
  return (
    <div className="App">
      
      <Navbar/>
      <BrowserRouter>

      <Route path = "/" exact component={Homescreens}/>
      <Route path ="/cart" exact component={CartScreens}/>
      <Route path ="/register" exact component={Registerscreen}/>
      <Route path='/login' exact component={Loginscreen}/>
      <Route path ='/orders' exact component={Ordersscreens}/>
      <Route path ='/admin'  component = {Adminscreen}/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
