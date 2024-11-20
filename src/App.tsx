import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegionPage from './pages/RegionPage';
import ArtifactPage from './pages/ArtifactPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/region/:regionId" element={<RegionPage />} />
        <Route path="/artifact/:artifactId" element={<ArtifactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
