import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import 'antd/dist/antd.css';
import Tables from './Tables';
import Forms from './Forms';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' exact component={Home}/>
      <Route path='/tables' exact component={Tables}/>
      <Route path='/Forms' exact component={Forms}/>


      </BrowserRouter>
      
    </div>
  );
}

export default Forms;
