import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './hooks/useSolana';
import Home from './pages/Home';
import CreateToken from './pages/CreateToken';
import ManageToken from './pages/ManageToken';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateToken />} />
              <Route path="/manage" element={<ManageToken />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;
