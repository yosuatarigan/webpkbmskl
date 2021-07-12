import React, {useState, useEffect} from 'react';
import Login from './component/login';
import Navbar from './component/Navbar';
import Dropdown from './component/Dropdown';
import {Switch, Route} from 'react-router-dom'
import Menuutama from './component/Menuutama';
import SKL from './component/SKl';
import Validasi from './component/Validasi';
import Inputdata from './component/Inputdata';
import {auth} from './firebase.utils';
import Riwayat from './component/Riwayat';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isvalid, setIsvalid] = useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        
        setIsvalid(true)
        // ...
      } else {
        setIsvalid(false)
      }
    });
  });


  return (
    <div >
      {
        isvalid ? <div> <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Switch>
          <Route path='/' exact component={Menuutama}/>
          <Route path='/skl' exact component={SKL}/>
          <Route path='/validasi' exact component={Validasi}/>
          <Route path='/input' exact component={Inputdata}/>
          <Route path='/riwayat' exact component={Riwayat}/>
        </Switch></div>

        : <Login/>
      }
     
    
    </div>
  );
}

export default App;
