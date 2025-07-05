
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Fetch Data Based on URL Param</h1>
        <nav>
          <Link to="/user/3">View User 3</Link>
        </nav>

        <Routes>
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
