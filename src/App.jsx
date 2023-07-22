import './App.css';;
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import { DisplayCountry } from './Pages/displayCountry';

function App() {
 


  return <>
   <Router>
    <Routes>
      <Route exact path={'/'} Component={Home}/>
      <Route path={'/:country'} Component={DisplayCountry}/>
    </Routes>
   </Router>
  </>


}

export default App;
