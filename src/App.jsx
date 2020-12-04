
import './App.css';
import{BrowserRouter as Router,Route} from 'react-router-dom'
import Nav from './components/Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login.jsx'
import Registro from './components/Registro.jsx'
import Index from './components/Index'


function App() {
  return (
    <>
  <Router>
     

     <Nav/>
    <Route path="/" exact component={Login}/>
    <Route path='/registrar' exact component={Registro}/>
    <Route path="/index" exact component={Index} />
  </Router>  
    </>
  );
}

export default App;
