
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');
  
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setalert(null);
    },1000);
  }

  const removebodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
  }
  const togglemode=(cls)=>{
    removebodyClasses();
    console.log(cls);
    document.body.classList.add("bg-"+cls);
    if(cls==='dark')
    {
      setmode('dark');
     
      showalert("Dark mode has been enabled","success")
      {/*document.title="TextUtils-Light Mode";*/}
    }
    else if (cls=='light'){
      setmode('light');
     
      showalert("Light mode has been enabled","success")
    }
    else if (cls=='primary'){
      setmode('primary');
   
      showalert("Primary mode has been enabled","success")
    }
    else if (cls=='success'){
      setmode('success');
   
      showalert("Success mode has been enabled","success")
    }
    else if (cls=='danger'){
      setmode('danger');
   
      showalert("Danger mode has been enabled","success")
    }
    else if (cls=='warning'){
      setmode('warning');
   
      showalert("Warning mode has been enabled","success")
    }

    
  }
  
  return (
   <>
   <Router>
<Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
<Alert alert={alert} mode={mode}/>
<div className='container my-3'>
<Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform heading="Enter text" mode={mode} showalert={showalert} />
              }
            ></Route>
          </Routes>

</div>
</Router>
   </>
  );
}

export default App;
