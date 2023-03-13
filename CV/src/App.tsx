import React from "react";
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navi  from './Navi';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
      <Navi />
    </React.Fragment>
  )
}

export default App
