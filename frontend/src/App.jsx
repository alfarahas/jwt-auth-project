import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const AppContent = () => {
  const { user, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (user) {
    return <Dashboard />;
  }

  return (
    <div className="App">
      <div className="auth-container">
        {isLogin ? (
          <Login switchToRegister={() => setIsLogin(false)} />
        ) : (
          <Register switchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;