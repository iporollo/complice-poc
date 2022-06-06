import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Company from './components/Company/Company';
import Financials from './components/Financials/Financials';
import Compliance from './components/Compliance/Compliance';
import Personal from './components/Personal/Personal';
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="company" element={<Company />} />
        <Route path="financials" element={<Financials />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="personal" element={<Personal />} />
      </Routes>
    </Layout>
  );
}

export default App;
