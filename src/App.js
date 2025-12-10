import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Editor from './components/editor/Editor';
import PreviewParams from './components/PreviewParams';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/preview/:templateId" element={<PreviewParams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
