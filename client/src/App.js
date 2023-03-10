import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Aboutus from './components/Aboutus/Aboutus';
import Contactus from './components/ContactUs/Contactus';
import EventsPage from './components/EventsPage/EventsPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import OurTeam from './components/OurTeam/OurTeam';
import Preloader from './components/Preloader/Preloader';
import { Cursor } from './Cursor';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setTimeout(() => { setloading(true) }, 3500);
    // window.onload=()=>{
    //   setloading(true);
    //   }
  }, []);

  return (
    <div className='body'>
       {loading?
        <div>
          <Cursor/>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/events" element={<EventsPage />} />
            <Route exact path="/ourteam" element={<OurTeam />} />
            <Route exact path="/aboutus" element={<Aboutus />} />
            <Route exact path="/contactus" element={<Contactus />} />
          </Routes>
          <Footer />
        </div>
        :<Preloader/>}
    </div>
  );
}

export default App;