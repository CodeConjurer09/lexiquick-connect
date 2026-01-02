import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';

const App: React.FC = () => {
  return (
    <Router>
      <ComingSoon />
    </Router>
  );
};

export default App;