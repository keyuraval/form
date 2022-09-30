
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Fnal from './components/Fnal';
import Form from './components/Form';
import Formt from './components/Formt';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form />}></Route>
        <Route path='/two' element={<Formt />}></Route>
        <Route path='/vald' element={<Fnal />} ></Route>


      </Routes>
    </div>
  );

}

export default App;
