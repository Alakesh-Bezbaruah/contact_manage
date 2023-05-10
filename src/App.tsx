import React, { useState } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import InputFeild from './pages/inputFeild/InputFeild';
import Leftbar from './components/leftbar/Leftbar';
import { Add } from './details';
import List from './pages/list/List';



const App: React.FC = () => {

  const [add , setAdd] = useState<string>("");
  const [adds, setAdds] = useState<Add[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(add){
      setAdds([...adds, {id:Date.now(),  add , isDone:false}]);
      setAdd("");
    }
  }
  console.log(adds);

  return (
    <div className='App'>
        <span className='heading'>Contact Management App</span>

            <div className='AppContainer'>
              <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='contact' element={<InputFeild add={add} setAdd={setAdd} handleAdd={handleAdd}/>}/>
              <Route path='/list' element={<List adds={adds} setAdds={setAdds}/>}/>
            </Routes>

            {/* {adds.map((t)=>(
              <li>{t.add}</li>
            ))} */}

            
          {/* <Leftbar/> */}

          </div>


    </div>
  );
};

export default App;
 