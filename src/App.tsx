import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Compose from './pages/Compose';
import Schedule from './pages/Schedule';
import Analytics from './pages/Analytics';
import Accounts from './pages/Accounts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="compose" element={<Compose />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="settings" element={<div className="p-8 text-center text-gray-500">Settings page coming soon</div>} />
          <Route path="*" element={<Navigate to="/\" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;