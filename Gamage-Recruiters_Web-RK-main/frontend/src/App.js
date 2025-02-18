import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Adminoverviewpage from './pages/Admin/Adminoverviewpage'; 
import AdminApplications from './pages/Admin/AdminApplications';
import AdminHomePage from './pages/Admin/AdminHomePage';
import Createjobpost from './pages/Admin/createjobpost';
import AdminMyJob from "./pages/Admin/Admin_my_job"; 


function App() {
  return (
      <Router>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={< Home/>} />
          <Route path="/Admin-over-viewpage" element={<Adminoverviewpage/>} />
          <Route path="/admin/applications/:jobId" element={<AdminApplications />} />
          <Route path="/Admin-home-page" element={<AdminHomePage/>}/>
          <Route path="/Admin-create-job" element={<Createjobpost/>}/>
          <Route path="/Admin_my_job" element={<AdminMyJob />} />
        </Routes>
      </Router>
  );
}

export default App;
