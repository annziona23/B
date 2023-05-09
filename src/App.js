
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dash from './components/Dash';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Dash />}></Route>
      <Route path='/add' element={<Form />}> </Route>
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
