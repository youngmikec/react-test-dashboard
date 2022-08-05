import React from 'react';
import './App.css';

import Dashboard from './page/dashboard';
import SideBar from './components/sidebar';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="">
  
      <div className="row">
          <div className="col-md-2">
              <SideBar />
          </div>
          <div className="col-md-10">
              <div className="container">
                  <Navbar />
                  <Dashboard />
                  <Footer />
              </div>
          </div>
      </div>
     
    </div>
  );
}

export default App;
