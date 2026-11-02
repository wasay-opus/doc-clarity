import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Eula from './pages/Eula';
import DeleteAccount from './pages/DeleteAccount';

function App() {
  return (
    <Router>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/end-user-license-agreement" element={<Eula />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

