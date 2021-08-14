import './App.css';
import { BrowserRouter,Switch , Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Switch>
         <Route exact path="/">
           <Login/>
         </Route>
         <Route path="/home">
           <Header/>
           <Home/>
         </Route>
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
