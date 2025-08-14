import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import CallScenarios from './pages/CallScenarios';
import CallHistory from './pages/CallHistory';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/call-scenarios" element={<CallScenarios />} />
          <Route path="/call-history" element={<CallHistory />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>;
}