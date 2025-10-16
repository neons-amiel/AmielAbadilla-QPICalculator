import React from 'react';
import QPICalculator from './pages/QPICalculator';
import ParticleBackground from './components/CoolBg';

function App() {
  return (
    <div className="relative">
      <ParticleBackground />
      <QPICalculator />
    </div>
  );
}

export default App;
